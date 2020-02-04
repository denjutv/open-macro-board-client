import { connect } from "react-redux";
import Password from "../../component/input/password";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Password );