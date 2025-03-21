import React from "react";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Suggestios from "./Suggestios.jsx";
function App(){
    return (
        <div className= "d-flex vh-100">
            <div className="w-20"><Sidebar/></div>
            <div className= "w-50" ><Feed/></div>
            <div className="w-30"><Suggestios/></div>
        </div>
    )
}

export default App;