import React from 'react';

import "./SectionTitle.css"


const SectionTitle = (props) => {

  return (
    
      <div className="title-container" >
        <div className="center">
           <p dangerouslySetInnerHTML={{__html: props.title}} />
        </div>
      </div>
  ) 
     
}

export default SectionTitle