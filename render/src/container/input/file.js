import { connect } from "react-redux";
import File from "../../component/input/file";
import { mapStateToProps, mapDispatchToProps as baseMapDispatchToProps } from "./index";
const {remote} = window.electron;

export const mapDispatchToProps = ( dispatch, ownProps ) => {
    const handler = baseMapDispatchToProps(dispatch, ownProps);

    const dialogOptions = {
        properties: ['openFile']
    };

    if( ownProps.filters )
    {
        dialogOptions.filters = ownProps.filters;
    }

    return Object.assign( handler, {
        openFileDialog: (connectionName, index) => {
            remote.dialog.showOpenDialog(dialogOptions, (files) => {
                if (files !== undefined && files.length === 1) {

                    console.log( files[0] );
                    // handle files
                    dispatch( handler.updateInput( connectionName, index, {target:{ name: ownProps.name ,value: files[0] }} ) );
                }
            });
        }
    });
};


export default connect( mapStateToProps, mapDispatchToProps )( File );