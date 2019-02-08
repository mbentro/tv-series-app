import React from 'react';


//functional component: Javascript which returns a react component
//Must capitalize name
//Anything after the =>( is returned form the function
const Intro = (props)=>(
    <p className="App-intro">
      {props.message}
    </p>
  )
  

export default Intro;