import React from 'react';
import clsx from 'clsx';

export default function Container(props){
    const {children,className, ...rest}=props;
    const cls = clsx("ui-container",className);
    return(
        <div className={cls} {...rest}>
            {children}
        </div>
    );
}