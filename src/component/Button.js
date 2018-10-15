import React from 'react';
import './Button.css';

const Button = (props) =>{
    
    return(
            <button type="button" className="btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-2" onClick={()=>props.addHandleTakeOrder(props.name,props.price)}>{props.name}<br /> S/ {props.price}</button>
    )
}

export default Button;