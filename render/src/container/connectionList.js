import { connect } from "react-redux";
import ConnectionList from "../component/connectionList";
import { openNewConnection } from "../action/"

const mapStateToProps = ( state, ownProps ) =>
({
    connections: state.connections
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    openNewConnection: () => dispatch( openNewConnection() )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionList );