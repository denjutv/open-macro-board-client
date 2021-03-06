import { connect } from "react-redux";
import ConnectionDialog from "../../component/connectionManager/connectionDialog";
import { closeNewConnectionDialog, updateConfigConnection, saveCurrentConnection } from "../../action/";
import { validateConnectionConfig } from "../../connectionHelper";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections,
    saveButtonLabel: "add",
    saveButtonIcon: "add",
    removeButtonLabel: "abort"
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeNewConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    saveHandler: ( currentConnection, connections ) => validateConnectionConfig( currentConnection, connections ) ? dispatch( saveCurrentConnection( Object.assign( {}, currentConnection ), true ) ) : null,
    removeHandler: () => dispatch( closeNewConnectionDialog() )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionDialog );