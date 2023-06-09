import React from 'react';
import './index.css';
import './App.css';
import NL from './images/NL.jpg'
import {BrowserRouter as Router, Route,Routes,Link  } from "react-router-dom";
import Service from './Components/Service';
import Home from './Components/Home';
import About from './Components/About';
import Form from './Components/Form';
import Contact  from './Components/Contact';
import Footer from './Components/Footer';



function App() {
	
	return (
		<div>
			<Router> 
			<nav class="navbar background " style={{height:'120px'}}>
				<ul class="nav-list">
					<div class="logo">
					<img src={NL}/>
					
					</div>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Service">SERVICES</Link></li>
					<li><Link to="/Form">Form</Link></li>
					
					<li><Link to="/Contact">CONTACT</Link></li>
				</ul>
				<div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
			</nav>
			<Routes>   <Route exact path="/" element={<Home/>} />   Home    </Routes>
			<Routes>   <Route exact path="/service" element={<Service/>} />    SERVICES     </Routes>
			<Routes>   <Route exact path="/About" element={<About/>} />    About           </Routes>
			<Routes>   <Route exact path="/Form" element={<Form/>} />      Form          </Routes>
			<Routes>   <Route exact path="/Contact" element={<Contact/>} /> Contact      </Routes>
			</Router>

			<div >
			<Footer />
			</div>
		
		</div>
	)
}

export default App
