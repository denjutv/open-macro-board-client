class MainWindow
{
    constructor()
    {
        this.win = null;
    }

    create( displaySettings, showDevTools )
    {
        const { BrowserWindow } = require( "electron" );
        const path = require( "path" );

        this.win = new BrowserWindow({
            width: displaySettings.width,
            height: displaySettings.height,
            transparent: false,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: false,
                preload: path.join( __dirname, "preload.js" )
            }
        });
    
        this.win.loadFile( path.join( __dirname, "..", "..", "render", "dist", "index.html" ) );

        if( displaySettings.fullscreen )
        {
            this.win.maximize();
        }

        if( showDevTools )
        {
            this.win.webContents.openDevTools();
        }
    
        this.win.on( "close", () =>
        {
            this.win = null;
        });
    }

    getSender()
    {
        return this.win.webContents;
    }
};

module.exports = new MainWindow();