import { connect } from "react-redux";
import MacroButtonSettings from "../../component/main/macroButtonSettings";

const mapStateToProps = ( state, ownProps ) =>
({
    macros: state.macros,
    macroList: Object.keys(state.macros)
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    
});

export default connect( mapStateToProps, mapDispatchToProps )( MacroButtonSettings );