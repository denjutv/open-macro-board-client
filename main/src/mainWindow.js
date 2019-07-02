class MainWindow
{
    constructor()
    {
        this.win = null;
    }

    create( displaySettings, showDevTools )
    {
        const { BrowserWindow } = require( "electron" );

        this.win = new BrowserWindow({
            width: displaySettings.width,
            height: displaySettings.height,
            transparent: false
        });
    
        const path = require( "path" );
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