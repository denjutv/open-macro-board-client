import React from "react";
import { render } from "react-dom";
import rootReducer from "./reducer/index";
import MainRouter from "./component/mainRouter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import connectionMiddleware from "./middleware/connection";
import connectionManagerMiddleware from "./middleware/connectionManager";
import buttonsMiddleware from "./middleware/buttons";
import soundMiddleware from "./middleware/sound";
import { MAIN_RENDER_CHANNEL, RENDER_DID_FINISH_LOAD } from "../../shared/channel";
 
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
        this.store = createStore( rootReducer, applyMiddleware( connectionMiddleware, connectionManagerMiddleware, buttonsMiddleware, soundMiddleware ) );

        // // set up ipc handler
        // // handle ipc message by dispatching them to the store
        electron.ipcRenderer.on( MAIN_RENDER_CHANNEL, ( event, message ) =>
        {
            this.store.dispatch( Object.assign( message, {event} ) );
        });

        electron.ipcRenderer.send( RENDER_DID_FINISH_LOAD, {} );

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