class App
{
    constructor()
    {
        const { app } = require( "electron" );
        this.app = app;
        this.conf = null;
        this.store = null;

        this.mainWindow = null;

        const ConnectionManager = require( "./connectionManager" );
        this.connectionManager = new ConnectionManager();
    }

    init()
    {
        // init config
        this.initConfig();

        // init redux store
        this.initStore();

        // ipc
        this.initIpc();

        // create window
        this.initMainWindow();

        this.app.on( "window-all-closed", () =>
        {
            if( process.platform !== "darwin" )
            {
                this.app.quit();
            }
        });
    }

    initConfig()
    {
        const defaultConfig = require( "./defaultConfig" );
        const Configstore = require( "configstore" );
 
        // create a Configstore instance with an unique ID and default values
        this.conf = new Configstore( "open-macro-board-client", defaultConfig);
    }

    initStore()
    {
        const { createStore, applyMiddleware } = require( "redux" );
        const rootReducer = require( "./reducer" );
        const connectionMiddleware = require( "./middleware/redux/connection" );
        // const initialState = {buttons: this.conf.get("buttons")};
        this.store = createStore( rootReducer, /*initialState ,*/ applyMiddleware( connectionMiddleware )  );
    }

    initMainWindow()
    {
        this.mainWindow = require( "./mainWindow" );

        this.app.on( "ready", () =>
        {
            this.mainWindow.create( this.conf.get("window"), this.conf.get("showDevTools") );
        });

        this.app.on( "activate", () => {
            if( this.mainWindow.win === null ) {
                this.mainWindow.create( this.conf.get("display") );
            }
        });
    }

    initIpc()
    {
        const { ipcMain } = require( "electron" );
        const { MAIN_RENDER_CHANNEL, RENDER_DID_FINISH_LOAD } = require( "../../shared/channel" );

        // handle ipc message by dispatching them to the store
        ipcMain.on( MAIN_RENDER_CHANNEL, ( event, message ) =>
        {
            this.store.dispatch( Object.assign( message, {event} ) );
        });

        ipcMain.on( RENDER_DID_FINISH_LOAD, ( event, message ) =>
        {
            this.connectionManager.loadConnections( this.conf, this.store, this.mainWindow.getSender() );

            // send settings to render process
            const objFilter = require( "./objFilter" );
            const {sendSettings} = require("./action/");
            const whiteList = ["language", "port"];
            this.store.dispatch( sendSettings( objFilter( this.conf.all, whiteList ) ) );
        });
    }
};

module.exports = new App();