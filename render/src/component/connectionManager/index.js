import React from "react";
import ConnectionEntryContainer from "../../container/connectionManager/connectionEntry";
import { withTranslation } from "react-i18next";

function ConnectionManager( props )
{
  const {t} = props;

  let activeConnection = props.connections.filter( connection => connection.name === props.currentConnectionName && connection.connected );

  if( activeConnection.length === 1 )
  {
    activeConnection = activeConnection[0];
  }
  else
  {
    activeConnection = null;
  }


  return (
    <div className="connectionManager isOpen">
      <div className="connectionManager__sidebar">

        <header className="connectionManager__header">
          <h2>{t("connectionManagerHeadline")}</h2>
          <div className="connectionManager__close" onClick={props.close}>close</div>
        </header>

        <main className="connectionManager__main">

          <div className="connectionHead">
            <span>{t("connectionManagerActive")}</span>
          </div>

          {
            activeConnection &&
            <ConnectionEntryContainer connection={activeConnection} connectionState="isActive" />
          }

          <div className="connectionHead">
            <span>{t("connectionManagerConnected")}</span>
          </div>


          {
            props.connections.filter( connection => connection.connected && connection.name !== props.currentConnectionName ).map( connection => (
              <ConnectionEntryContainer key={connection.name} connection={connection} connectionState="isConnected" hasEditButton={true} hasDisconnectButton={true} />
            ) )
          }


          <div className="connectionHead">
            <span>{t("connectionManagerNotConnected")}</span>
          </div>

          {/* todo: connectionState isLoading */}
          {
            props.connections.filter( connection => !connection.connected ).map( connection => (
              <ConnectionEntryContainer key={connection.name} connection={connection} connectionState="" hasSettingsButton={true} openEditDialog={props.openEditConnectionDialog.bind(null, connection)} />
            ) )
          }
        </main>

        <footer className="connectionManager__footer">
          <div className="ctaButton" onClick={props.openNewConnectionDialog}>
            <span>add</span>{t("connectionManagerNewConnectionButton")}
          </div>
        </footer>

      </div>
      <div className="connectionManager__overlay" onClick={props.close}>
      </div>

    </div>
  );
}

export default withTranslation()(ConnectionManager);