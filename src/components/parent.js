import { useState } from "react";
import React from 'react'

export default function Parent({setState,setChildData}) {
    let[data,setData]=useState({username:'',password:''});
    

    function handleClick(){
        setState(false);
        setChildData(data);
    }
    function handleChange(event){
        setData({...data,[event.target.name]:event.target.value});
    }
    


  return (
    <form>
      <p>Login </p>
        <label htmlFor="UserName"></label><input type="text" name='username' onChange={handleChange}/>
        <label htmlFor="Password"></label><input type="text" onChange={handleChange} name="password"  />
        <button onClick={handleClick}>Submit</button>

    </form>
  )
}
