import React from 'react';


export default props =>
 <div align='center'>
 <h1 > Arena {props.arena}</h1>
 {React.Children.map(props.children, heroi => {
 return React.cloneElement(heroi, { ...props });
 })}
 </div>