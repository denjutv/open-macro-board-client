import { connect } from "react-redux";
import ConnectionDialog from "../../component/connectionManager/connectionDialog";
import { closeNewConnectionDialog, updateConfigConnection, saveCurrentConnection } from "../../action/";
import { validateConnectionConfig } from "../../connectionConfigValidator";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: state.connectionManager.editConnection,
    connections: state.connections,
    successButtonLabel: "add",
    successButtonIcon: "add"
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeNewConnectionDialog() ),
    updateConfigConnection: ( event ) => dispatch( updateConfigConnection(event.target.name, event.target.value) ),
    successHandler: ( currentConnection, connections ) => validateConnectionConfig( currentConnection, connections ) ? dispatch( saveCurrentConnection( Object.assign( {}, currentConnection ), true ) ) : null
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionDialog );