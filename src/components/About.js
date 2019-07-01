import React from 'react';

function About(props) {
  return ( 
    <div >
      <h1>ABOUT</h1>
      <p>{props.data}</p>
    </div>
  );
}

export default About;