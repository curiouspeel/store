import React from 'react';
import clsx from 'clsx';

export default function Button(props){
    const {children,className, ...rest}=props;
    const cls = clsx("ui-button",className);

    return(
        <button className={cls} {...rest}>
            {children}
        </button>
    );
}