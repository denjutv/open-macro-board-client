import { connect } from "react-redux";
import KeyValueList from "../../component/input/keyValueList";
import { updateMacroInput } from "../../action";

const mapStateToProps = ( state, ownProps ) => ownProps;

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    updateInput: event => dispatch( updateMacroInput(event) )
});

export default connect( mapStateToProps, mapDispatchToProps )( KeyValueList );