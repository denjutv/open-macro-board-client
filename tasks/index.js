const gulp = require( "gulp" );
const path = require( "path" );
const webpack = require( "webpack-stream" );
const runElectron = require( "gulp-run-electron" );
const rootFolder = path.join( __dirname, ".." );
const renderFolder = path.join( rootFolder, "render" );
const mainFolder = path.join( rootFolder, "main" );

const webpackConfig = require( path.join( renderFolder, "webpack.config.js" ) );

const rendererSrc = path.join( renderFolder, "src" );
const rendererDist = path.join( renderFolder, "dist" );

const mainSrc = path.join( mainFolder, "src" );

console.log( "run gulp" );

const buildRenderer = function( )
{
    return gulp.src( rendererSrc )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( rendererDist ) );
}

const restartRenderer = function( )
{
    return runElectron.rerun();
}

const startApplication = function( )
{
    return gulp.src( mainSrc )
    .pipe( runElectron( [], {cwd: rootFolder} ) );
}

const createWindowEventHandler = function()
{
    // https://github.com/yan-foto/electron-reload/blob/master/main.js
    // const { app } = require( "electron" );
    // app.on( "browser-window-created", (event, browserWindow) => {
    //     browserWindows.push(browserWindow);
    
    //     // Remove closed windows from list of maintained items
    //     browserWindow.on( "closed", function ()
    //     {
    //       let index = browserWindows.indexOf(browserWindow); // Must use current index
    //       browserWindows.splice(index, 1);
    //     });
    
    //     console.log( "foo" );
    // });

    const electron = require( "electron" );
    console.log( electron );

    return Promise.resolve();
}

const watchRenderer = function( )
{
    gulp.watch( rendererSrc, gulp.series( buildRenderer, restartRenderer ) );
}

const watchMain = function( )
{
    gulp.watch( mainSrc, runElectron.rerun);
}

gulp.task( "dev", gulp.series( buildRenderer, startApplication, /*createWindowEventHandler,*/ gulp.parallel( watchRenderer, watchMain ) ) );