import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBox from "../TextBox/TextBox";
import VideoPlayer from '../Video/VideoPlayer';

const OlympicAchievments = () => {

    return (
        <div>
            <SectionTitle id="olympicAchievments" title="OLYMPIC ACHIEVMENTS" />

            <div data-testid="video" className="video-container">
                <div > <VideoPlayer /> </div> 
                <TextBox contClass="video-side-container"
                         boxClass="video-side-text"
                         text="Lorem ipsum dolor sit amet, consectetur adipiscina dapibus, consectetur adipiscie metus eu luctus. Integer pharetra turpis eget nulla dapibus, id cursus lectus tincidunt. Phasellus eu lorem interdum usce in lorem erat.Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit."
                />
            </div>

        </div>
       
    )
}

export default OlympicAchievments