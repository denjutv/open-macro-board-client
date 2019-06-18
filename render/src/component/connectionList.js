import React from "react";
import ConnectionConfigContainer from "../container/connectionConfig";
import { withTranslation } from "react-i18next";

function ConnectionList(props)
{
    const {t} = props;
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
                            { ((connection.connected) ? t("connectionStateConnected") : t("connectionStateNotConnected")) }
                        </div>
                    )} )
                }
                <button onClick={props.openNewConnection}>+</button>
            </div>

            <ConnectionConfigContainer />
        </div>
    );
}

export default withTranslation()(ConnectionList);