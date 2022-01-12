import React from 'react';
import clsx from 'clsx';

export default function Input(props){
    const {type="text", className, ...rest}=props;
    const cls = clsx("ui-textfield",className);

    return(
        <input 
        type={type}
        className={cls}
        {...rest}
        />
    );
}