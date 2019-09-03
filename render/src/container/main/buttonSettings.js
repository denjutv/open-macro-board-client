import { connect } from "react-redux";
import ButtonSettings from "../../component/main/buttonSettings";
import { updateButton } from "../../action/";

const mapStateToProps = ( state, ownProps ) =>
({
    selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
    button: state.buttons[ownProps.connection.name][state.buttonSettings.selectedButtonIndex]
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateButton: ( index, event ) => dispatch( updateButton( ownProps.connection.name, index, event.target.name, event.target.value ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ButtonSettings );