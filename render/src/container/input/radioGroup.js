import { connect } from "react-redux";
import RadioGroup from "../../component/input/radioGroup";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( RadioGroup );