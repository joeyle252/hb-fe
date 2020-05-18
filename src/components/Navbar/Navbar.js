import React from "react";



export default function Navbar() {
  // when user click button, onClick event will call the function
  // expect to see it will show a form with resiter information
const signUp = function (){
  console.log("sign up")
  
}

  return (
   <div> 
     <button onClick={signUp}> sign up</button>
     

     </div>
  );
}
