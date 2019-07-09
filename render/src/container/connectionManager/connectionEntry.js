import { connect } from "react-redux";
import ConnectionEntry from "../../component/connectionManager/connectionEntry";
import { setActiveConnection } from "../../action/"

const mapStateToProps = ( state, ownProps ) =>
({
    connection: ownProps.connection,
    connectionState: ownProps.connectionState,
    hasEditButton: ownProps.hasEditButton,
    hasSettingsButton: ownProps.hasSettingsButton
});

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    setActiveConnection: connectionName => dispatch( setActiveConnection(connectionName) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ConnectionEntry );