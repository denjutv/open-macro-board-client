import { connect } from "react-redux";
import ConnectionManager from "../../component/connectionManager";
import { closeConnectionManager } from "../../action/"

const mapStateToProps = ( state, ownProps ) =>
({
    connections: state.connections,
    activeConnectionName: state.connectionManager.activeConnectionName
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    close: () => dispatch( closeConnectionManager() )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionManager );