import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Footer.css"



const Footer = () => {
    return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					
					<div className="col">
					 <br></br>
					 <ul className="list-unstyled">
						<li>  Address: </li>
						
						<li>  120 High street </li>
						<li>  Bendigo VIC 3423 </li>  
						<br></br>                 
						<li>  ph. 04 87678234  </li>
						<li>  e-mail: info@basc.com.au </li>

					 </ul>
					</div>
					<div className="col"> </div>
					<div className="col"> </div>
					<div className="col"> </div>
					<div className="col">
						<br></br>
						<ul className="list-unstyled">
							<li><p><a href="#!" class="text-reset">Privacy Statement</a></p></li>
							<li><p><a href="#!" class="text-reset">Terms & Conditions</a></p></li>
            </ul>
          </div>
				</div>
        <div><br></br></div>
			    <div className="bottom-footer">	         
				    <p>&copy;{new Date().getFullYear()} BASC - All rights reserved</p>
					</div>	
				</div>
			</div>
    );
}; 

export default Footer;