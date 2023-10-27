import React, { useState } from "react";

const Input=()=>{
   const[fullNames,setFullName]=useState({
    fname:"",
    lname:"",
    email:"",
    number:"",
   }) 
  // const[clik,setClik]=useState() 
   //const[lastNames,setLastNames]=useState("") 
   //const[lastClik,setLastClik]=useState("") 
   const upDate =()=>{
    //console.log(setFullName(fullNames))
    alert("form submit")
    }

    const evntHndle=(event)=>{
       //// console.log(event.target.value)
       // console.log(event.target.name)
      //const value=event.target.value;
      //const name = event.target.name;

      const {name, value}= event.target;

      setFullName((prevVal)=>{
       // console.log(prevVal)
   
       return { 
        
        ...prevVal,
        [name]:value,
    
        
    };

})
}

     
  
    return(
        <>
        <div className="my_frm">
        <form>
            <h1 className="hading">Hello {fullNames.fname} {fullNames.lname}</h1>
            <h2 className="hading_two">{fullNames.email} {fullNames.phone}</h2>
            <div>
           
            <input 
            type="text"
             placeholder="enter text here"
             name="fname"
              onChange={evntHndle}
              value={fullNames.fname}
              
              >
              </input> 
              <input 
             type="text"
             placeholder="enter text here"
            name="lname"
              onChange={evntHndle}
              value={fullNames.lname}
              
              >
              </input>
              <input 
             type="email"
             placeholder="enter email here"
            name="email"
              onChange={evntHndle}
              value={fullNames.email}
              autoComplete="off"
              >
              </input>
              <input 
             type="number"
             placeholder="enter number here"
            name="phone"
              onChange={evntHndle}
              value={fullNames.phone}
              >
              </input>   

              
              </div>
              </form>
            <button onClick={upDate}>Click Me 👍</button>     
             </div>
        </>
    )
};


export default Input;