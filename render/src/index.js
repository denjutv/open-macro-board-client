/**
 * Entry point for the electron frontend.
 */
import frontend from "./frontend";
import "./translator";

// inits the frontend
frontend.init( document.getElementById( "content" ) );
