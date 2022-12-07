import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBox from "../TextBox/TextBox";
import ImageDisplayer from "../ImageDisplayer/ImageDisplayer"
import Modal from '../Modal/Modal';
import './Progrma.css';

const Progrmas = (props) => {

  return (

    <div>
        <SectionTitle title="OUR PROGRAMS" />
        <div>
        <div id="our-programs" class="program-container">
                    <ImageDisplayer class="grid-image-container" image="https://i.imgur.com/Ka99gMu.jpg" altLine="Learn about the recreational program"/>
                    <div>                    
                        <TextBox contClass="grid_item_container"
                                boxClass="text-grid-item"
                                buttonText="RECREATIONAL PROGRAM"
                                text="Lorem ipsum dolor sit amet, consecteterat. Maecenas commodo ornare metuso ornare orem interdum usce in lor meharetra s tincidunt. Phasellus eu lorem interdum usce in lorem erat.Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit."
                        />
                        
                    </div>
                    <div>
                        <TextBox contClass="grid_item_container"
                                boxClass="text-grid-item"
                                buttonText="PERFORMANCE CLUB"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing onsectetur adipiscing elit. Fuser pharetra turpis eget nulla dapidunt. Phasellus eu lorem interdum usce in lorem erat.Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit Maecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit."
                        />
                    </div>
                        <ImageDisplayer class="grid-image-container" image="https://i.imgur.com/mptDo6w.jpg" altLine="Learn about the performance club"/>

                        <ImageDisplayer class="grid-image-container" image="https://i.imgur.com/RqZ40br.jpg" altLine="Learn about the competition program"/>
                        
                        <div>
                        <TextBox contClass="grid_item_container"
                                boxClass="text-grid-item"
                                buttonText="COMPETITION TEAM"
                                text="Lorem ipsum dolor sit amet, consectetur adipis aecenas commodo ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, consectetur adipiscing elit.aretra turpis eget nulla dapibus, id cursus lectus tincidunt. Phasellum usce in lorem erat.Maecenas commodo ornare meteget nulla dapibus, id adipiscido ornare metus eu luctus. Integer pharetra turpis eget nulla dapibus, id adipiscing elit."
                        />
                    </div>
            </div>
        </div>

        <div id="schedule-link"  class="program-schedule" >
                <div className="center-button">                   
                    <span onClick={props.onClickHandler}><a href="#">Schedule</a></span>                    
            </div>
                {props.openSchedule && <Modal modalType="ScheduleTable" closeSchedule={props.closeSchedule} />}
        </div> 
     </div>   
  ) 
}

export default Progrmas