import React from 'react';


const TextBox = (props) => {
    
    return (        
            <div className={props.contClass}>
                <div className={props.boxClass}>
                    <p > {props.text}</p> 
                    <br></br>
                </div>                
                {props.buttonText  && <button onClick="openInfo()" class="btn">{props.buttonText}</button>}
                
            </div> 
    ) 
}

export default TextBox