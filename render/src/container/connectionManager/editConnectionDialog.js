import { connect } from "react-redux";
import ConnectionDialog from "../../component/connectionManager/connectionDialog";
import { closeEditConnectionDialog, updateConfigConnection, saveCurrentConnection } from "../../action/";
import { validateConnectionConfig } from "../../connectionConfigValidator";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections,
    successButtonLabel: "save",
    successButtonIcon: "save",
    originalConnectionName: state.connectionManager.originalEditConnectionName
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeEditConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    successHandler: ( currentConnection, connections, originalConnectionName ) => validateConnectionConfig( currentConnection, connections, originalConnectionName ) ? alert(123) : null
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionDialog );