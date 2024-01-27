 import React from "react";
 import myContext from "./mycontext";

 function myState(props){
    const name = "Mudassir";
    
    return(
        <myContext.Provider>
            {props.children}
        </myContext.Provider>
    )
 }

 export default myState;