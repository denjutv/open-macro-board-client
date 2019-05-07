const openSocket = require( "socket.io-client" );

class ConnectionManager
{
    constructor( )
    {
        this.connections = {};
        this.config = null;
    }

    loadConnections( config )
    {
        this.config = config;
    }

    addConnection( connectionData, dispatch, sender )
    {
        let added = false;

        if( !this.connections.hasOwnProperty( connectionData.name ) )
        {
            this.connections[ connectionData.name ] = 
            {
                socket: this.createConnection( connectionData, dispatch, sender ),
                connectionData
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
                Object.entries( this.connections ).map( ([ key, value ]) => value.connectionData ) );
        }
    }

    /*createConnection( connectionData, dispatch, sender )
    {
        let socket = openSocket( `http://${connectionData.host}:${connectionData.port}` );

        // socket.on( "action", ( action ) =>
        // {
        //     console.log( "action", action );
        //     // dispatch( action );
        // });

        socket.on( "connect", ( ) =>
        {
            console.log( "connected" );
            let action = {};
            action.type = CONNECTION_CONNECTED;
            action.currentConnection = Object.assign( {}, connectionData );
            action.sender = sender;
            dispatch( action );
        });

        // socket.on( "connect_error", ( error ) =>
        // {
        //     console.log( "error", error );
        // });

        return socket;
    }*/

    createConnection( connectionData, dispatch, sender )
    {
        const { CONNECTION_CONNECTED } = require( "../../shared/actionType" );

        setTimeout( () =>
        {
            console.log( "connected" );
            let action = {};
            action.type = CONNECTION_CONNECTED;
            action.currentConnection = Object.assign( {}, connectionData );
            action.sender = sender;
            dispatch( action ); 
        },
        250 );

        return {};
    }
};

module.exports = new ConnectionManager();