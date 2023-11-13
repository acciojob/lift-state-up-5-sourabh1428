
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./parent";
import Child from "./child";

const App = () => {
  let[state,setState]=useState(true);


  return (
    <div>
        {/* Do not remove the maiqn div */}
      {(state)?<Parent setState={setState}/>:<Child/>}


    </div>
  )
}

export default App
