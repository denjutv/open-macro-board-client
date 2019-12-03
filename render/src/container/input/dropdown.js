import { connect } from "react-redux";
import Dropdown from "../../component/input/dropdown";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Dropdown );