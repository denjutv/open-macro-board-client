import { connect } from "react-redux";
import Text from "../../component/input/text";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Text );