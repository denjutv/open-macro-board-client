import React from "react";
import Wrapper from "./wrapper";
import ConnectionManagerContainer from "../container/connectionManager";

function OpenMacroBoardClient( props )
{
    const markup = [ <Wrapper key="wrapper" /> ];
    
    if( props.isConnectionManagerOpen )
    {
        markup.push( <ConnectionManagerContainer key="connectionsManager" /> );
    }
    
    return markup;
};

export default OpenMacroBoardClient;