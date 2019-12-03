import { connect } from "react-redux";
import Textarea from "../../component/input/textarea";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( Textarea );