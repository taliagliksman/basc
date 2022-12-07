import React from 'react'
import Gallery from '../Gallery/Gallery';
import SectionTitle from '../SectionTitle/SectionTitle';
import TweeterWidget from '../Widget/TweeterWidget';



const NationalClub = () => {

    return (
        <div>
             <SectionTitle title="NATIONAL CLUB" />

             <div id="national-club" class="twitter-container" >
                <div> <TweeterWidget/> </div>   
                <div> <Gallery /> </div>
             </div>
        </div>       
    )
}
export default NationalClub