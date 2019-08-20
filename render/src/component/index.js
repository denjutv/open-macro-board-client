import React from "react";
import Wrapper from "./wrapper";
import ConnectionManagerContainer from "../container/connectionManager";
import NewConnectionDialogContainer from "../container/connectionManager/newConnectionDialog";
import EditConnectionDialogContainer from "../container/connectionManager/editConnectionDialog";

function OpenMacroBoardClient( props )
{
    return(
        <React.Fragment>
            <Wrapper key="wrapper" />
            {props.isConnectionManagerOpen && <ConnectionManagerContainer key="connectionsManager" /> }
            {props.isNewConnectionOpen && <NewConnectionDialogContainer key="newConnectionDialog" /> }
            {props.isEditConnectionOpen && <EditConnectionDialogContainer key="editConnectionDialog" /> }
        </React.Fragment>
    );
};

export default OpenMacroBoardClient;