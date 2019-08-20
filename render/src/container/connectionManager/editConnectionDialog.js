import { connect } from "react-redux";
import ConnectionDialog from "../../component/connectionManager/connectionDialog";
import { closeEditConnectionDialog, updateConfigConnection, updateCurrentConnection } from "../../action/";
import { validateConnectionConfig } from "../../connectionConfigValidator";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections,
    saveButtonLabel: "save",
    saveButtonIcon: "save",
    originalConnectionName: state.connectionManager.originalEditConnectionName
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeEditConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    saveHandler: ( currentConnection, connections, originalConnectionName ) => validateConnectionConfig( currentConnection, connections, originalConnectionName ) ? dispatch( updateCurrentConnection( Object.assign( {}, currentConnection ), originalConnectionName ) ) : null
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionDialog );