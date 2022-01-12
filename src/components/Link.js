import React from 'react';


export default function Link(props){
    return(
        <a 
        className="ui-link"
        href={props.href}>
            {props.children}
        </a>
    );
}