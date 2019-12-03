import { updateMacroInput } from "../../action";
import {getCurrentConnectionByName } from "../../connectionHelper";

export const mapStateToProps = ( state, ownProps ) => {
    const connection = getCurrentConnectionByName( state.connections, state.connectionManager.currentConnectionName );
    const connectionName = connection ? connection.name : "";
    const buttons = state.buttons[connectionName];
    const button = buttons ? buttons[state.buttonSettings.selectedButtonIndex] : null;
    const value = button ? button.macro[ownProps.name] : "";


    return Object.assign({}, ownProps, {
        connectionName,
        selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
        value,
        checked: value ? true : false
    });
}

export const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateInput: (connectionName, index,event) => dispatch( updateMacroInput(connectionName, index,event) )
});