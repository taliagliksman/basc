import React from 'react';


const ModalWrapper  = (props) =>{ 
    return (
        <div className={props.modalClassName && props.modalClassName}>    
            <div className={props.contentClassName}>
            <span onClick={props.onClickHandler} style={props.closeBtnstyle} className="closeEvents">&times;</span> 
                {props.tableName}
            </div>                   
        </div> 
    );
}

export default ModalWrapper