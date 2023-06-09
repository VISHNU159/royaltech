import React from 'react';
import c from './img/c.jpg';
import d from './img/d.jpg';
import b2 from './img/b2.jpg';
import e from './img/e.jpg';
import qs from './img/qs.jpg';
import qs1 from './img/qs1.png';
import icl from './img/icl.jpg';
import icl1 from './img/icl1.jpg';
import icl2 from './img/icl2.jpg';
import b3 from'./img/b3.jpg';
import b4 from'./img/b4.jpg';
import b5 from'./img/b5.jpg';
import b6 from'./img/b6.jpg';
import b7 from'./img/b7.jpg';


const Home = () => {
	return (
		<div class='home'>
		<div class='h'>
			
			  <h1> WELCOME TO   HOME PAGE </h1> 
            <div class='l'>
			<img src={c} alt='c'/> <img src={d} alt='d'/> <img src={b2} alt='b2'/>  
			</div>

      <p>Custom plastic injection molding and urethane foam molding solutions company.
	  Trusted to create customer success through ​​informed​ ​design and​ ​engineering​ with world-class manufacturing​.
	  Our customers rely on us to provide innovative, forward-thinking solutions for urethane foam and thermoplastic
	  injection molding. Everything about our company,
	from the capabilities we’ve perfected to each of our six facilities, has been built around doing just that.</p>


 <h1> Quality & Sustainability</h1>
 <img src={qs}/>     <img src={qs1}/>
<p>Whether it’s creating two-shot or multi-shot injection molding processes
 or crafting precision plastic lenses, our IATF 16949 (ISO 9001) and ISO 14001 
 certified systems are held to impeccable standards of quality and environmental
   sustainability from design to delivery.Advanced. Focused. Trusted.</p>

<p>
Royal Technologies is an advanced engineering and manufacturing company serving 
 diverse industries, including furniture, automotive, firearm, appliance and consumer
 product markets. Our customers rely on us because we earn their trust day after day with
 forward-thinking advanced injection molding solutions.</p>

Read More about Royal


<h1> Careers at Royal Technologies: Your future starts here.
</h1>
<img src={icl}/>     <img src={icl1}/> <img src={icl2}/>    
<p>Join a culture where you’ll be respected and valued.
	 Your ideas matter. You matter.
	  We always need people who are excited to become part of a team 
working hands-on to solve complex problems.
 If you’re ready to start building your future, 
 Royal Technologies is ready for you.</p>
		</div>
		<div class='a'>
		<div class='a1'>
		
			<h1>  ABOUT ROYAL TECHNOLOGIES
            </h1>
			<div class='alogo'>
			 <img src={b3} alt='b3' />  <img src={b4} alt='b4' />   <img src={b5} alt='b5'/>  <img src={b6}/>  <img src={b7}/> 
			</div>
<div class='a2'>
			 Royal Technologies is an advanced engineering and manufacturing
			  company serving diverse industries
			   including furniture, 
			   automotive, firearm, appliance and consumer product markets.
              Integrity. Stewardship. Teamwork. Hard Work. Excellence.
			  They are the values that drive our company. They make up the fabric of our culture. 
               They make us who we 
			
</div>

			
		</div>
		</div>
		</div>
		
	);
};

export default Home;
