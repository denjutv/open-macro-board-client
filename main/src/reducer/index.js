const { combineReducers } = require( "redux" );
const connectionReducer = require( "./connection" );

module.exports = combineReducers(
{
    connections: connectionReducer
});