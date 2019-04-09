import React from "react";
import ConnectionConfigContainer from "../container/connectionConfig";

function ConnectionList(props)
{
    return (
        <div>
            <div>
                {
                    props.connections.map( connection =>
                    {
                        return (
                        <div key={connection.name}>
                            {connection.name}<br />
                            {connection.host}:{connection.port}<br />
                            { ((connection.socket && connection.socket.connected) ? "connected" : "not connected") }
                        </div>
                    )} )
                }
                <button onClick={props.openNewConnection}>+</button>
            </div>

            <ConnectionConfigContainer />
        </div>
    );
}

export default ConnectionList;