import { connect } from "react-redux";
import Main from "../../component/main/";
import {getCurrentConnectionByName } from "../../connectionHelper";

const mapStateToProps = ( state, ownProps ) =>
({
    currentConnection: getCurrentConnectionByName( state.connections, state.connectionManager.currentConnectionName )
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    
});

export default connect( mapStateToProps, mapDispatchToProps )( Main );