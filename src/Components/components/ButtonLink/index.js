import React from 'react';

function ButtonLink (props) {
    // se der console.log vai ver que novo video é children
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}
export default ButtonLink;