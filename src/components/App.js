
import React, { useState } from "react";
import './../styles/App.css';
import Parent from "./parent";
import Child from "./child";

const App = () => {
  let[state,setState]=useState(true);
  let[data,setData]=useState({});

  return (
    <div>
        {/* Do not remove the maiqn div */}
      {(state)?<Parent setChildData={setData} setState={setState}/>:<Child data={data}/>}


    </div>
  )
}

export default App
