import React from 'react';
import EventTable from "../Table/EventTable"
import ScheduleTable from "../Table/ScheduleTable"
import ContactForm from "../ContactForm/ContactForm"
import ModalWrapper from './ModalWrapper/ModalWrapper';
import "./Modal.css";

const Modal  = (props) =>{ 

    return (
              
        <div>
           {props.modalType == "EventTable"  &&  

                <ModalWrapper
                    modalClassName="e-modal"
                    contentClassName="events-modal-content"
                    onClickHandler={() => props.closeEventsModal(false)}
                    tableName={<EventTable />}
                    closeBtnstyle={{left:'98.5%'}}
                /> 
           }  
          
           {props.modalType == "ScheduleTable"  &&  
                   
                <ModalWrapper
                    modalClassName="s-modal"
                    contentClassName="schedule-modal-content"
                    onClickHandler ={() => props.closeSchedule(false)}
                    tableName={<ScheduleTable />}
                    closeBtnstyle={{left:'98.5%'}}
                />  
            } 
  
           { props.modalType == "ContactForm"  &&  
               
                <ModalWrapper
                                    
                    contentClassName="contact-form-modal"
                    onClickHandler={() => props.closeForm(false)}
                    tableName={<ContactForm />}
                    closeBtnstyle={{left:'95%'}}
                />    
           } 

        </div>
    )
  }
  
  export default Modal

