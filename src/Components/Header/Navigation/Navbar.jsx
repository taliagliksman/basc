import React, {useState} from 'react';
import "./Navbar.css";
import "../../../pages/Home"


class Navbar extends React.Component {

    render() {

        return(

            <div>
                <nav className="Navbar"> 
                  <div className="nav-menu">
                    
                      <li ><a className="nav-links" href="#leading-coach"> LEADING COACH </a></li>
                      <li ><a className="nav-links" href="#our-programs"> OUR PROGRAMS </a></li>
                      <li ><a className="nav-links" href="#national-club"> NATIONAL CLUB </a></li>
                      <li ><a onClick={() => {this.props.openEventsRef(true)}}  className="nav-links" id="events-link" href="#"> EVENTS </a></li>
                      <li ><a className="nav-links" href="#schedule-link"> SCHEDULE </a></li>
                      <li ><a onClick={() => {this.props.openFormRef(true)}} className="nav-links" href="#"> CONTACT US </a></li>
                  </div>
                </nav>
            
           </div>  
        )
    }
}

export default Navbar