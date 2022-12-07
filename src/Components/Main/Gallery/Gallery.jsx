import React from 'react';
import ImageSlider from "./ImageSlider";

const Gallery = () => {

const slides = [
    {url:'https://i.imgur.com/bT5pDej.jpg', title:'London 2012'},
    {url:'https://i.imgur.com/9u1cEf7.jpg', title:'Rio 2006'},
    {url:'https://i.imgur.com/vnNE9YB.jpg', title:'Gold Coast 2000'}

]

const containerStyle = {
    
    width:"660px",
    height:"400px",
    margin:"0 auto",

}
return (
    <div>
        <div style = {containerStyle}>
        <ImageSlider slides={slides} />
        </div>
    </div>
);
}
export default Gallery;