import { useState } from "react";
import React from 'react'
import Child from './child'


export default function Parent() {

    let[state,setState]=useState(true);
    let[data,setData]=useState({username:'',password:''});
    

    function handleClick(event){
        event.preventDefault();
      setState(!state);
       
    }
    function handleChange(event){

        setData({...data,[event.target.name]:event.target.value});
    }
    


  return (state)?(
    <form>
      <p>Login </p>
        <label htmlFor="UserName"></label><input type="text" name='username' onChange={handleChange}/>
        <label htmlFor="Password"></label><input type="text" onChange={handleChange} name="password"  />
        <button onClick={handleClick}>Submit</button>

    </form>
  ):<Child/>
}
