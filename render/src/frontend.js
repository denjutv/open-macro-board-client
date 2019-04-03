import React from "react";
import { render } from "react-dom";
import rootReducer from "./reducer/index";
import MainRouter from "./component/mainRouter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

/**
 * Main frontend class, that creates and holds the store, requests the button settings from the main process and starts the rendering.
 */
class Frontend
{
    constructor()
    {
        this.store = null;
    }

    /**
     * Initializes the frontend, by creating the store and start rendering.
     * 
     * @param {Object} contentElement - DOM element in which the frontend is rendered.
     */
    init( contentElement )
    {
        // create store
        this.store = createStore( rootReducer /*, applyMiddleware( buttonMiddleare ) */ );

        // // set up ipc handler
        // // handle ipc message by dispatching them to the store
        // window.electron.ipcRenderer.on( MAIN_RENDER_CHANNEL, ( event, message ) =>
        // {
        //     this.store.dispatch( Object.assign( message, {event} ) );
        // });

        // // request button settings
        // this.store.dispatch( requestButtonSettings() );

        render( 
            <Provider store={this.store}>
                <MainRouter />
            </Provider>,
            contentElement
        );
    }
};

export default new Frontend();