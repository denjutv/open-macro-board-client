class ConnectionHelper
{
    getConnectionIndexByName( connections, name )
    {
        let connectionIndex = -1;
        const connectionLength = connections.length;

        for( let index=0; index < connectionLength; ++index )
        {
            let con = connections[index];

            if( con.name === name )
            {
                connectionIndex = index;
                break;
            }
        }
        
        return connectionIndex;
    }

    checkForUniqueConnectionName( connections, name )
    {
        return this.getConnectionIndexByName( connections, name ) === -1;
    }
}

module.exports = new ConnectionHelper();