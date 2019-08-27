import React from "react";
import HeaderContainer from "../container/header";
import MainContainer from "../container/main/";

function Wrapper( props )
{
    return (
        <div className="wrapper">
            <HeaderContainer />
            <MainContainer />
        </div>
    )
};

export default Wrapper;