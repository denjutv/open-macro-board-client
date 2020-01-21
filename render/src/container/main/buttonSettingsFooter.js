import { connect } from "react-redux";
import ButtonSettingsFooter from "../../component/main/buttonSettingsFooter";
import { saveButton, resetButton } from "../../action";

const mapStateToProps = ( state, ownProps ) =>
({
    selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
    connection: ownProps.connection,
    isButtonChanged: state.buttons.isButtonChanged,
    connection: ownProps.connection,
    button: state.buttons[ownProps.connection.name][state.buttonSettings.selectedButtonIndex]
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    saveButton: ( connectionName, index, button ) => dispatch( saveButton( connectionName, index, button ) ),
    resetButton: ( connectionName, index ) => dispatch( resetButton( connectionName, index ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ButtonSettingsFooter );