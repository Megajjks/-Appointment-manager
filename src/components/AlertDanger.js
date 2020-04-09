import React from 'react';

const AlertDanger = (props) => {
    return (  
        <p className="alerta-error">
            {props.content}
        </p>
    );
}
 
export default AlertDanger;