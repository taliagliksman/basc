import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBox from "../TextBox/TextBox";
import ImageDisplayer from "../ImageDisplayer/ImageDisplayer"



const LeadingCoach = () => {

    return (
       <div>
        <SectionTitle title={"BENDIGO ARTISTIC SWIMMING CLUB<br/>OLGA BRADECHEV"}/>    
        <div id="leading-coach" class="coach_container"> 
        <TextBox contClass="grid_item_container"
                    boxClass="text-grid-item"
                    buttonText="FIND OUT MORE ABOUT OLGA"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus. Integer pharetra turpis eget nulla  volutpat magna a, hendrerit nisi. lorem erat. Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, consectetur adipiscing elit. Fusce in lorem erat. Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id cursus lectus tincidunt. Phasellus eu lorem interdum usce in lorem erat.Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit."
        />
        <ImageDisplayer class="image-grid-item" image="https://i.imgur.com/GgYGVGu.jpg" altLine="Olga-Leading Coach"/>
        </div>
    </div>
    )
}

export default LeadingCoach