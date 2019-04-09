import React from "react";

function ConnectionConfig( props )
{
    if( props.currentConnection === null )
    {
        return null;
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Connection Name</label>
                <input type="text" name="name" id="name" value={props.currentConnection.name} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="host">Host</label>
                <input type="text" name="host" id="host" value={props.currentConnection.host} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="port">Port</label>
                <input type="text" name="port" id="port" value={props.currentConnection.port} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={props.currentConnection.passwort} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="passwordRepeat">Password (repeat)</label>
                <input type="password" name="passwordRepeat" id="passwordRepeat" value={props.currentConnection.passwortRepeat} onChange={props.updateConnection} />
            </div>

            <button onClick={props.saveCurrentConnection.bind( null, props.currentConnection )}>save</button>
        </div>
    )
}

export default ConnectionConfig;