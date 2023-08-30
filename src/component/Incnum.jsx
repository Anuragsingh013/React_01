import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";







 const Inc=() =>{
  // const state= useState();
   const[count,setCount]=useState(1);

   const  INCNUM=()=>{
  
    
  setCount(count+1);
    console.log("clicked"+count++);
  console.log(`yr ye console m bhi show nhi ho rha `);
  
   }
    return(
      <>
        
        <h1>{count}</h1>
        <button onClick={INCNUM} type="button" class="btn btn-outline-danger mt-4" >Click me </button>
        
            
         
      </>
      
    );
}
export default Inc