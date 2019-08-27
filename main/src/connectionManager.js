const openSocket = require( "socket.io-client" );

class ConnectionManager
{
    constructor( )
    {
        this.connections = {};
        this.config = null;
    }

    getConnectionByName( name )
    {
        let connection = null;

        if( this.existsConnectionByName( name ) )
        {
            connection = this.connections[ name ];
        }

        return connection;
    }

    existsConnectionBySocket( host, port )
    {
        return Object.entries(this.connections)
            .filter(
                ([connectionName, connection]) => connection.connectionData.host.replace("localhost", "127.0.0.1") === host.replace("localhost", "127.0.0.1")
                                                    && connection.connectionData.port === port
            ).length > 0;
    }

    existsConnectionByName( name )
    {
        return this.connections.hasOwnProperty( name );
    }

    loadConnections( config, store, sender )
    {
        this.config = config;

        const connections = config.get( "connections" );

        if( connections )
        {
            const { CONFIG_CONNECTION_SAVE } = require( "../../shared/actionType" );
            for( let conIndex = 0; conIndex < connections.length; ++conIndex )
            {
                const connection = connections[ conIndex ];
                
                store.dispatch(
                {
                    type: CONFIG_CONNECTION_SAVE,
                    currentConnection: connection.connectionData,
                    buttons: connection.buttons,
                    isNewConnection: true,
                    event: {
                        sender
                    }
                });
            }
        }
    }

    addConnection( connectionData, buttons, dispatch, sender )
    {
        let added = false;
        buttons = buttons || this.config.get("defaultButtonSettings");

        // check if a conection with the connection name already exists
        if( !this.existsConnectionByName( connectionData.name )
            && !this.existsConnectionBySocket( connectionData.host, connectionData.port )
            )
        {
            this.connections[ connectionData.name ] = 
            {
                socket: this.createConnection( connectionData, buttons, dispatch, sender ),
                connectionData,
                buttons
            };
            added = true;

            this.saveToConfig();
        }

        return added;
    }

    updateConnection( connectionData, buttons, dispatch, sender, originalConnectionName )
    {
        let isUpdated = false;
        const originalName = originalConnectionName || connectionData.name;

        if( this.existsConnectionByName( originalName) )
        {
            const connection = this.getConnectionByName( originalName );

            connection.connectionData = connectionData;
            
            // connection.socket.disconnect(true);
            connection.socket = this.createConnection( connectionData, buttons, dispatch, sender );

            // todo update buttons ???

            isUpdated = true;
            this.saveToConfig();
        }
        
        return isUpdated;
    }

    removeConnection( connectionName )
    {
        let isRemoved = false;

        if( this.existsConnectionByName( connectionName ) )
        {
            delete this.connections[ connectionName ];
            isRemoved = true;
            this.saveToConfig();

            // check if removed connection was the current connection
            if( connectionName === this.config.get( "currentConnectionName" ) )
            {
                this.config.set( "currentConnectionName", null );
            }
        }

        return isRemoved;
    }

    saveToConfig()
    {
        if( this.config )
        {
            this.config.set( "connections",
                Object.entries( this.connections ).map( ([ key, value ]) => ({connectionData: value.connectionData, buttons: value.buttons }) ) );
        }
    }

    createConnection( connectionData, buttons, dispatch, sender )
    {
        let socket = openSocket( `http://${connectionData.host}:${connectionData.port}` );

        socket.on( "action", ( action ) =>
        {
            dispatch( action );
        });

        socket.on( "connect", ( ) =>
        {
            console.log( "connected" );
            const { connected, updateButtons } = require( "./action/" );

            // dispatch connection state to the frontend process
            dispatch( connected( connectionData, sender ) );

            // after connecting send button config to board
            dispatch( updateButtons( connectionData.name, buttons ) );
        });

        socket.on( "disconnect", () =>
        {
            const { CONNECTION_DISCONNECTED } = require( "../../shared/actionType" );

            console.log( "disconnected" );
            let action = {};
            action.type = CONNECTION_DISCONNECTED;
            action.currentConnection = Object.assign( {}, connectionData );
            action.sender = sender;
            dispatch( action );
        });

        return socket;
    }
};

module.exports = ConnectionManager;