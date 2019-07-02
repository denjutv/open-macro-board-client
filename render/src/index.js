/**
 * Entry point for the electron frontend.
 */
import frontend from "./frontend";
import "./translator";

// import styles
import "../assets/css/main.css";
import "../assets/css/icon.css";

// inits the frontend
frontend.init( document.getElementById( "content" ) );
