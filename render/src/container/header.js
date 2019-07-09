import { connect } from "react-redux";
import Header from "../component/header";
import { openConnectionManager } from "../action/";

const mapStateToProps = ( state, ownProps ) =>
({
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    openConnectionManager: () => dispatch( openConnectionManager() )
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );