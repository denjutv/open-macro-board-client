const openSocket = require( "socket.io-client" );

class ConnectionManager
{
    constructor( )
    {
        this.connections = {};
        this.config = null;
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

        // check if a conection with the connection name already exists
        if( !this.connections.hasOwnProperty( connectionData.name ) )
        {
            this.connections[ connectionData.name ] = 
            {
                socket: this.createConnection( connectionData, dispatch, sender ),
                connectionData,
                buttons: buttons ? buttons : this.config.get("defaultButtonPositions")
            };
            added = true;

            this.saveToConfig();
        }

        return added;
    }

    saveToConfig()
    {
        if( this.config )
        {
            this.config.set( "connections",
                Object.entries( this.connections ).map( ([ key, value ]) => ({connectionData: value.connectionData, buttons: value.buttons }) ) );
        }
    }

    createConnection( connectionData, dispatch, sender )
    {
        let socket = openSocket( `http://${connectionData.host}:${connectionData.port}` );

        socket.on( "action", ( action ) =>
        {
            // console.log( "action", action );
            dispatch( action );
        });

        socket.on( "connect", ( ) =>
        {
            const { CONNECTION_CONNECTED } = require( "../../shared/actionType" );

            console.log( "connected" );
            let action = {};
            action.type = CONNECTION_CONNECTED;
            action.currentConnection = Object.assign( {}, connectionData );
            action.sender = sender;
            dispatch( action );
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

        // socket.on( "connect_error", ( error ) =>
        // {
        //     console.log( "error", error );
        // });

        return socket;
    }

    // createConnection( connectionData, dispatch, sender )
    // {
    //     const { CONNECTION_CONNECTED } = require( "../../shared/actionType" );

    //     setTimeout( () =>
    //     {
    //         console.log( "connected" );
    //         let action = {};
    //         action.type = CONNECTION_CONNECTED;
    //         action.currentConnection = Object.assign( {}, connectionData );
    //         action.sender = sender;
    //         dispatch( action ); 
    //     },
    //     250 );

    //     return {};
    // }
};

module.exports = ConnectionManager;