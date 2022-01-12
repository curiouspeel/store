import React from 'react';


export default function Link(props){
    let inputType="text";
    inputType = props.type;

    return(
        <input 
        className="ui-textfield"
        type={inputType}
        placeholder={props.placeholder}
        name={props.name}
        >
            {props.children}
        </input>
    );
}