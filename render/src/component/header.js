import React from "react";
import { withTranslation } from "react-i18next";

function Header( props )
{
    const {t} = props;

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    Open Macro Deck
                </div>
                {
                    ( props.hasConnections && props.currentConnection ) ?
                    <div className="header__connection header__connection--connected" onClick={props.openConnectionManager}>
                        {props.currentConnection.host}
                        <span>{props.currentConnection.name}</span>
                    </div>
                    :
                    <div className="header__connection header__connection--connected" onClick={props.openNewConnectionDialog}>
                        <span>{t("headerCreateConnection")}</span>
                    </div>
                }
            </div>
        </header>
    )
};

export default withTranslation()(Header);