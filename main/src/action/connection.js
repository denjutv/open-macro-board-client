const { CONNECTION_ADD } = require( "../../../shared/actionType" );

module.exports =
{
    CONNECTION_ADD,
    
    addConnection: ( connection ) =>
    {
        return {
            type: CONNECTION_ADD,
            connection
        };
    }
};