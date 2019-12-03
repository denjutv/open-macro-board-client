import { connect } from "react-redux";
import KeyValueList from "../../component/input/keyValueList";
import { updateMacroInput } from "../../action";
import {getCurrentConnectionByName } from "../../connectionHelper";

const mapStateToProps = ( state, ownProps ) => {
    const connection = getCurrentConnectionByName( state.connections, state.connectionManager.currentConnectionName );
    const connectionName = connection ? connection.name : "";
    const buttons = state.buttons[connectionName];
    const button = buttons ? buttons[state.buttonSettings.selectedButtonIndex] : null;
    const value = (button && button.macro[ownProps.name]) ? button.macro[ownProps.name] : [];

    return Object.assign({}, ownProps, {
        connectionName,
        selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
        value
    });
}

export const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateInput: (connectionName, buttonIndex, listName, list, listIndex, event) => {
        const virtualEvent = {target:{name:listName, value: list.slice(), type: "list"}};

        if( listIndex >= list.length )
        {
            virtualEvent.target.value.push( {checked:true, key:"", value:""} );
        }

        virtualEvent.target.value[listIndex] = Object.assign( {}, virtualEvent.target.value[listIndex] );
        virtualEvent.target.value[listIndex][event.target.name] = event.target.type === "checkbox" ? event.target.checked : event.target.value

        dispatch( updateMacroInput(connectionName, buttonIndex,virtualEvent) );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( KeyValueList );