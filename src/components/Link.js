import React from 'react';
import clsx from 'clsx';

export default function Link(props){
    const {children,className, ...rest}=props;
    const cls = clsx("ui-link",className);

    return(
        <a 
        className={cls}
        {...rest}
        >
            {children}
        </a>
    );
}