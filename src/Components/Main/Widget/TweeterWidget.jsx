import React from 'react';
import "./TweeterWidget.css"
import { TwitterTimelineEmbed} from 'react-twitter-embed';

const tweeterStyles = {
     width:"88%",
     position:"relative", 
     right:"130px",
     bottom:"5px",

}
const TweeterWidget = () => {
  return (
   
    <div className="twitter-tweet">
        <div style={tweeterStyles}>
            <TwitterTimelineEmbed
            onLoad={function noRefCheck(){}}
            options={{height: 400}}
            sourceType="url"
            url="https://twitter.com/ArtisticSwimAus"
            />  

            <div className="caption-container ">Join the National Club on Twitter</div>       
        </div>
         
    </div>
  
  )
}

export default TweeterWidget