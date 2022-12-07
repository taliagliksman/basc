import React from 'react'
import ImageDisplayer from '../Main/ImageDisplayer/ImageDisplayer'

const Header = (props) => {

    return (
        <div className="header">

            <ImageDisplayer className={props.imgAttr.imgContainer} image={props.imgAttr.imgSource} altLine={props.imgAttr.imgAltLine} />
            <div style={{width:'80%'}} >{props.animation }</div>
            <div>
                {props.navbar}                           
                {props.eventTable} 
                {props.contactForm}
            </div>     
        </div>
    )
}  

export default Header