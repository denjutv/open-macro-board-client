import { connect } from "react-redux";
import OpenMacroBoardClient from "../component";

const mapStateToProps = ( state, ownProps ) =>
({
    isConnectionManagerOpen: state.connectionManager.isOpen
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
});

export default connect( mapStateToProps, mapDispatchToProps )( OpenMacroBoardClient );