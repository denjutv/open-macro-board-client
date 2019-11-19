import { connect } from "react-redux";
import Dropdown from "../../component/inputs/dropdown";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Dropdown );