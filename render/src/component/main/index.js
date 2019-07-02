import React from "react";
import Board from "./board";
import ButtonSettings from "./buttonSettings";

function Main( props )
{
    return (

        <main className="main">
		    <div className="main__inner">

			    <Board />
                
                <ButtonSettings />

		    </div>
	    </main>
    );
}

export default Main;