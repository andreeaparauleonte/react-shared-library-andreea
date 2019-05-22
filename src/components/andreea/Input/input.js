import React from 'react';
const funcTest=(props)=>{
    console.log("test");
    console.log(props);
}
const Input = (props)=>{
return (<div><input {...props} onChange={()=>{props.onChange();funcTest(props);}} /></div>)
}

export default Input;
