import React from "react";
import ConnectionConfigContainer from "../container/connectionConfig";

function ConnectionList(props)
{
    return (
        <div>
            <div>
                {
                    props.connections.map( connection =>
                    (
                        <div key={connection.name}>{connection.name}</div>
                    ) )
                }
                <button onClick={props.openNewConnection}>+</button>
            </div>

            <ConnectionConfigContainer />
        </div>
    );
}

export default ConnectionList;