import React, {useState} from "react";
import LeadingCoach from "../Components/Main//LeadingCoach/LeadingCoach"
import Programs from "../Components/Main/Programs/Programs"
import Navbar from "../Components/Header/Navigation/Navbar";
import Modal from "../Components/Main/Modal/Modal"
import Footer from "../Components/Footer/Footer"
import TextAnimation from "../Components/Header/TextAnimation/TextAnimation"
import Header from "../Components/Header/Header";
import OlympicAchievments from "../Components/Main/OlympicAchievments/OlympicAchievments"
import NationalClub from "../Components/Main/NationalClub/NationalClub"


function Home () {

    const [openEvents, setOpenEvents] = useState(false);

    const [openSchedule, setOpenSchedule] = useState(false);

    const [openContactForm, setOpenContactForm] = useState(false);

    const imgAttr = { imgContainer:"home-container",
                      imgSource:"https://i.imgur.com/kHSd82H.jpg",
                      imgAltLine:"welcome to BASC"
    }

    return (
        <main>
            <Header
                imgAttr={imgAttr}
                animation={<TextAnimation />}
                navbar = {<Navbar openEventsRef={setOpenEvents} openFormRef={setOpenContactForm} navbar="navbar"/>}
                eventTable= {openEvents &&  <Modal closeEventsModal={setOpenEvents} modalType="EventTable" /> } 
                contactForm = {openContactForm && <Modal closeForm={setOpenContactForm} modalType="ContactForm" /> }
            />

            <LeadingCoach />
            
            <Programs openSchedule={openSchedule} 
                      onClickHandler={() => {setOpenSchedule(true)}} 
                      callModal={<Modal closeScheduleModal={setOpenSchedule} />}
                      modalType="ScheduleTable" 
                      closeSchedule={setOpenSchedule}/>
                       
            
            <OlympicAchievments />

            <NationalClub />

            <Footer />
   
        </main> 
    )
  }
  export default Home

