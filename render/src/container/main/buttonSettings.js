import { connect } from "react-redux";
import ButtonSettings from "../../component/main/buttonSettings";
import { updateButton } from "../../action/";
import { remote } from "electron"

const mapStateToProps = ( state, ownProps ) =>
({
    selectedButtonIndex: state.buttonSettings.selectedButtonIndex,
    button: state.buttons[ownProps.connection.name][state.buttonSettings.selectedButtonIndex]
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateButton: ( index, event ) => dispatch( updateButton( ownProps.connection.name, index, event.target.name, event.target.value ) ),
    openIconFileDialog: (iconPath, buttonIndex) => {
        remote.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Images', extensions: ['jpg', 'png', 'gif', 'ico'] }
            ]
        }, (files) => {
            if (files !== undefined && files.length === 1) {
                // handle files
                dispatch( updateButton( ownProps.connection.name, buttonIndex, "iconPath", files[0] ) );
            }
        });
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( ButtonSettings );