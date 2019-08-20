import { connect } from "react-redux";
import ConnectionDialog from "../../component/connectionManager/connectionDialog";
import { closeEditConnectionDialog, updateConfigConnection, updateCurrentConnection, removeConnection } from "../../action/";
import { validateConnectionConfig } from "../../connectionConfigValidator";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections,
    saveButtonLabel: "save",
    saveButtonIcon: "save",
    removeButtonLabel: "remove",
    originalConnectionName: state.connectionManager.originalEditConnectionName
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeEditConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    saveHandler: ( currentConnection, connections, originalConnectionName ) => validateConnectionConfig( currentConnection, connections, originalConnectionName ) ? dispatch( updateCurrentConnection( Object.assign( {}, currentConnection ), originalConnectionName ) ) : null,
    removeHandler: (connectionName) => dispatch( removeConnection(connectionName) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionDialog );