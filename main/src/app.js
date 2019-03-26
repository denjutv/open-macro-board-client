class App
{
    constructor()
    {
        const { app } = require( "electron" );
        this.app = app;
        this.conf = null;
        this.store = null;

        this.mainWindow = null;
    }

    init()
    {
        // init config
        this.initConfig();

        // console.log( this.app.getAppPath() );

        // init redux store
        // this.initStore();

        // create window
        this.initMainWindow();

        this.app.on( "window-all-closed", () =>
        {
            if( process.platform !== "darwin" )
            {
                this.app.quit();
            }
        });

        // ipc
        // this.initIpc();
    }

    initConfig()
    {
        const defaultConfig = require( "./defaultConfig" );
        const Configstore = require( "configstore" );
 
        // create a Configstore instance with an unique ID and default values
        this.conf = new Configstore( "open-macro-board-client", defaultConfig);
    }

    // initStore()
    // {
    //     const { createStore, applyMiddleware } = require( "redux" );
    //     const rootReducer = require( "./reducer" );
    //     const buttonMiddleare = require( "./middleware/redux/button" );
    //     const initialState = {buttons: this.conf.get("buttons")};
    //     this.store = createStore( rootReducer, initialState, applyMiddleware( buttonMiddleare ) );
    // }

    initMainWindow()
    {
        this.mainWindow = require( "./mainWindow" );

        this.app.on( "ready", () => this.mainWindow.create( this.conf.get("window"), this.conf.get("showDevTools") ) );

        this.app.on( "activate", () => {
            if( this.mainWindow.win === null ) {
                this.mainWindow.create( this.conf.get("display") );
            }
        });
    }

    // initIpc()
    // {
    //     const { ipcMain } = require( "electron" );
    //     const { MAIN_RENDER_CHANNEL } = require( "../../shared/channel" );

    //     // handle ipc message by dispatching them to the store
    //     ipcMain.on( MAIN_RENDER_CHANNEL, ( event, message ) =>
    //     {
    //         this.store.dispatch( Object.assign( message, {event} ) );
    //     });
    // }
};

module.exports = new App();