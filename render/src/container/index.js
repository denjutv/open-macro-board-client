import { connect } from "react-redux";
import OpenMacroBoardClient from "../component";

const mapStateToProps = ( state, ownProps ) =>
({
    isConnectionManagerOpen: state.connectionManager.isOpen,
    isNewConnectionOpen: state.connectionManager.isNewConnectionOpen,
    isEditConnectionOpen: state.connectionManager.isEditConnectionOpen,
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
});

export default connect( mapStateToProps, mapDispatchToProps )( OpenMacroBoardClient );