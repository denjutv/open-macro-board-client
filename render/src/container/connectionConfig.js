import { connect } from "react-redux";
import ConnectionConfig from "../component/connectionConfig";
import { updateConfigConnection } from "../action/";

const mapStateToProps = ( state, ownProps ) =>
({
    currentConnection: state.connectionConfig.currentConnection
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateConnection: event => dispatch( updateConfigConnection( event.target.name, event.target.value ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionConfig );