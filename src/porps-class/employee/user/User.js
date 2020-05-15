import React from 'react';
// ------ User funtion component using porps (do not have state and can not use this keyword)

const User = (props) =>{
    let age = props.age?props.age:"NA";

    return (<div>Name:{props.children} || Age:{age}</div>)
}

export default User;