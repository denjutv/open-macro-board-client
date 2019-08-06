import React from "react";
import Wrapper from "./wrapper";
import ConnectionManagerContainer from "../container/connectionManager";
import NewConnectionDialogContainer from "../container/connectionManager/newConnectionDialog";

function OpenMacroBoardClient( props )
{
    const markup = [ <Wrapper key="wrapper" /> ];
    
    if( props.isConnectionManagerOpen )
    {
        markup.push( <ConnectionManagerContainer key="connectionsManager" /> );
    }

    if( props.isNewConnectionOpen )
    {
        markup.push( <NewConnectionDialogContainer key="newConnectionDialog" /> );
    }
    
    return markup;
};

export default OpenMacroBoardClient;