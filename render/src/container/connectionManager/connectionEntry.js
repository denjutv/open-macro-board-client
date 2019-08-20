import { connect } from "react-redux";
import ConnectionEntry from "../../component/connectionManager/connectionEntry";
import { setCurrentConnection } from "../../action/"

const mapStateToProps = ( state, ownProps ) =>
({
    connection: ownProps.connection,
    connectionState: ownProps.connectionState,
    hasEditButton: ownProps.hasEditButton,
    hasSettingsButton: ownProps.hasSettingsButton
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    setCurrentConnection: connectionName => dispatch( setCurrentConnection(connectionName) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionEntry );