import { connect } from "react-redux";
import File from "../../component/input/file";
import { mapStateToProps, mapDispatchToProps } from "./index";

export default connect( mapStateToProps, mapDispatchToProps )( File );