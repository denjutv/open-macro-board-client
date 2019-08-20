import React from "react";
import ConnectionEntryContainer from "../../container/connectionManager/connectionEntry";

function ConnectionManager( props )
{
  let activeConnection = props.connections.filter( connection => connection.name === props.activeConnectionName && connection.connected );

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
          <h2>Verbindungen verwalten</h2>
          <div className="connectionManager__close" onClick={props.close}>close</div>
        </header>

        <main className="connectionManager__main">

          <div className="connectionHead">
            <span>aktiv</span>
          </div>

          {
            activeConnection &&
            <ConnectionEntryContainer connection={activeConnection} connectionState="isActive" />
          }

          <div className="connectionHead">
            <span>Verbunden</span>
          </div>


          {
            props.connections.filter( connection => connection.connected && connection.name !== props.activeConnectionName ).map( connection => (
              <ConnectionEntryContainer key={connection.name} connection={connection} connectionState="isConnected" hasEditButton={true} hasDisconnectButton={true} />
            ) )
          }


          <div className="connectionHead">
            <span>nicht verbunden</span>
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
            <span>add</span>Neue Verbindung
          </div>
        </footer>

      </div>
      <div className="connectionManager__overlay" onClick={props.close}>
      </div>

    </div>
  );
}

export default ConnectionManager;