import React from "react";
import { withTranslation } from "react-i18next";

function ConnectionConfig( props )
{
    if( props.currentConnection === null )
    {
        return null;
    }

    const {t} = props;

    return (
        <div>
            <div>
                <label htmlFor="name">{t("connectionConfigConnetionName")}</label>
                <input type="text" name="name" id="name" value={props.currentConnection.name} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="host">{t("connectionConfigHost")}</label>
                <input type="text" name="host" id="host" value={props.currentConnection.host} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="port">{t("connectionConfigPort")}</label>
                <input type="text" name="port" id="port" value={props.currentConnection.port} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="password">{t("connectionConfigPassword")}</label>
                <input type="password" name="password" id="password" value={props.currentConnection.passwort} onChange={props.updateConnection} />
            </div>

            <div>
                <label htmlFor="passwordRepeat">{t("connectionConfigPasswordRepeat")}</label>
                <input type="password" name="passwordRepeat" id="passwordRepeat" value={props.currentConnection.passwortRepeat} onChange={props.updateConnection} />
            </div>

            <button onClick={props.saveCurrentConnection.bind( null, props.currentConnection, props.connections )}>{t("connectionConfigSaveButton")}</button>
        </div>
    )
}

export default withTranslation()(ConnectionConfig);
// export default ConnectionConfig;