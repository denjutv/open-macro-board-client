import React from "react";
import BoardContainer from "../../container/main/board";
import ButtonSettingsContainer from "../../container/main/buttonSettings";

function Main( props )
{
    return (

        <main className="main">
		    <div className="main__inner">

                {
                    props.currentConnection &&
                    <React.Fragment>
                        <BoardContainer connection={props.currentConnection} />
                        
                        <ButtonSettingsContainer connection={props.currentConnection} />
                    </React.Fragment>
                }

		    </div>
	    </main>
    );
}

export default Main;