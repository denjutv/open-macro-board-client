import { connect } from "react-redux";
import Board from "../../component/main/board";


const mapStateToProps = ( state, ownProps ) =>
({
    connection: ownProps.connection
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    
});

export default connect( mapStateToProps, mapDispatchToProps )( Board );