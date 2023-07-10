import React from 'react'
 function Alert (props){
    const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        <div style={{height:'50px'}}>
        {/* // && isme props.alert true hai to agge ki div return hongi or false hai to aage execute nhi honga */}
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
    )
}
export default Alert