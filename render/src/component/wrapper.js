import React from "react";
import HeaderContainer from "../container/header";
import Main from "./main/";

function Wrapper( props )
{
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Main />
        </div>
    )
};

export default Wrapper;