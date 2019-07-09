import React from "react";

function Header( props )
{
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    Open Macro Deck
                </div>
                <div className="header__connection header__connection--connected" onClick={props.openConnectionManager}>
                    192.168.1.66
                    <span>Zombiedeck</span>
                </div>
            </div>
        </header>
    )
};

export default Header;