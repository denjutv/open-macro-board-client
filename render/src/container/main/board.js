import { connect } from "react-redux";
import Board from "../../component/main/board";
import { selectButton } from "../../action/buttonSettings";

const mapStateToProps = ( state, ownProps ) =>
({
    connection: ownProps.connection,
    buttons: state.buttons[ownProps.connection.name],
    selectedButtonIndex: state.buttonSettings.selectedButtonIndex
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    selectButton: index => dispatch( selectButton(index) )
});

export default connect( mapStateToProps, mapDispatchToProps )( Board );