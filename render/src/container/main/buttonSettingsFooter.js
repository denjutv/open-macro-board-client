import { connect } from "react-redux";
import ButtonSettingsFooter from "../../component/main/buttonSettingsFooter";
import { resetButton } from "../../action";

const mapStateToProps = ( state, ownProps ) =>
({
    selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
    connection: ownProps.connection,
    isButtonChanged: state.buttons.isButtonChanged
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    resetButton: ( connectionName, index ) => dispatch( resetButton( connectionName, index ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ButtonSettingsFooter );