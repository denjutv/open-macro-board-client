import React from "react";
import Header from "./header";
import Main from "./main/";

function Wrapper( props )
{
    return (
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    )
};

export default Wrapper;