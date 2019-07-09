import React from "react";

function ConnectionEntry( props )
{
  const connection = props.connection;

  return (
    <div className={"connectionItem " + ( props.connectionState.length ? " " + props.connectionState : "") }>
      <div className="connectionItem__label">
          <span>settings_input_hdmi</span>{connection.host}:{connection.port}
      </div>
      <div className="connectionItem__head">
        {connection.name}
      </div>

      { props.hasEditButton && <div className="connectionItem__settings">
        <span onClick={props.setActiveConnection.bind(null, connection.name )}>edit</span>
      </div>}
      { props.hasSettingsButton && <div className="connectionItem__settings">
        <span>settings</span>
      </div>}

      <div className="connectionItem__button">
          <button>trennen</button>
      </div>
    </div>
  );
}

export default ConnectionEntry;