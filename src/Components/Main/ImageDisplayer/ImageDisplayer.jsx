import React from 'react';


const ImageDisplayer = (props) => {

    const imgStyles = {
        width:"100%",        
    }

    return (
        <figure class={props.class} >
            <img src={props.image} alt={props.altLine} style={imgStyles}/>
        </figure>
    )

}

export default ImageDisplayer 
