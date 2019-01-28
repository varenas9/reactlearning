import React from 'react';

function Button(props){
  const {clickMe,children}=props;
  return <button onClick={clickMe}>{children} </button>;
}
export default Button;