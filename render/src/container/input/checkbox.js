import { connect } from "react-redux";
import Checkbox from "../../component/input/checkbox";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Checkbox );