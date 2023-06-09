import React from 'react';
import { Router } from "react-router-dom";
import {BrowserRouter as Router, Route,Routes,Link  } from "react-router-dom";
import './index.css';



function nav() {
	
	return (
		<div>
			<Router> 
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
					<img src={NL}/>
					
					</div>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Service">SERVICES</Link></li>
					
					<li><Link to="/Form">Form</Link></li>
					
					<li><Link to="/Contact">CONTACT-US</Link></li>
				</ul>
				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>
			<Routes>   <Route exact path="/" element={<Home/>} />   Home    </Routes>
			<Routes>   <Route exact path="/service" element={<Service/>} />    SERVICES     </Routes>
			<Routes>   <Route exact path="/About" element={<About/>} />    About           </Routes>
			<Routes>   <Route exact path="/Form" element={<Form/>} />      Form          </Routes>
			<Routes>   <Route exact path="/Contact" element={<Contact/>} /> Contact      </Routes>

			
			</Router>
		</div>
	)
}

export default nav
