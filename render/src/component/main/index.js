import React from "react";
import BoardContainer from "../../container/main/board";
import ButtonSettings from "./buttonSettings";

function Main( props )
{
    return (

        <main className="main">
		    <div className="main__inner">

                {
                    props.currentConnection &&
                    <React.Fragment>
                        <BoardContainer />
                        
                        <ButtonSettings />
                    </React.Fragment>
                }

		    </div>
	    </main>
    );
}

export default Main;