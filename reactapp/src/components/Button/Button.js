import React from "react";


export const Button = (props) => {
    return(
        <button className="button" onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;