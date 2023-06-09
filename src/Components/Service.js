import React from 'react';
import w from './img/w.jpg';
import w1 from './img/w1.jpg';
import w3 from './img/w3.jpg';
import w4 from './img/w4.jpg';
import m from './img/m.jpg';
import m1 from './img/m1.jpg';
import g from './img/g.jpg';
import g1 from './img/g1.jpg';
import i from './img/i.jpg';
import i1 from './img/i1.jpg';
import c  from './img/c.jpg';
import c1 from './img/c1.jpg';
import ec from './img/ec.png';
import ec1 from './img/ec1.png';
import cw from './img/cw.jpg';
import cw1 from './img/cw1.jpg';
import uud from './img/uud.jpg';
import uud1 from './img/uud1.jpg';
import p from './img/p.jpg';
import p1 from './img/p1.jpg';

import './index.css'


const Service = () => {
  return (
    <div class='service'>
    <div class="S">
    <marquee class="marquee">   WELCOME TO  ROYAL  TECHNOLOY  SERVICES</marquee>
      <h1>  </h1> 
    </div>
    

At [Company Name], we pride ourselves on providing exceptional services to meet the diverse needs of our clients. 
Our team of experts is committed to delivering top-notch solutions that exceed your expectations. 
Whether you're an individual, a small business, or a large enterprise, 
we have a range of services designed to cater to your specific requirements. 
Explore our service offerings below:

 <h1>1. Web Design and Development:</h1>
  <img src={w} alt='w'/>  <img src={w1} alt='w1'/>  

  <p>Our skilled web design and development team create stunning and functional websites 
   tailored to your business objectives.
   From responsive designs to e-commerce platforms,
    we ensure a seamless user experience and a strong online presence. </p>

      <h1>2. Mobile App Development:</h1>
     <img src={m} alt='m'/>     <img src={m1} alt='m1'/>
     <p>In this mobile-centric world, we develop robust and user-friendlymobile applications for iOS and
     Android platforms. Our talented app developers use the latest technologies 
      to bring your app idea to life,ensuring it stands out in the competitive app market.</p>

    <h1>3. Digital Marketing:</h1>
   <img src={w3}  alt='w3'/>     <img src={w4}  alt='w4'/>
   <p>   Our digital marketing services encompass a wide range of strategies to enhance your online visibility, 
     attract qualified leads, and drive conversions. We specialize in search engine optimization (SEO), 
     social media marketing, pay-per-click advertising, content marketing, and more</p>

   <h1>4. Graphic Design:</h1>
   <img src={g} alt='g'/>     <img src={g1} alt='g1' />
   <p> Our creative graphic design team crafts visually appealing designs that align with your brand identity.
    We offer logo design, branding materials, marketing collateral, infographics,
    and other graphic design services to help you leave a lasting impression on your audience. </p>

     <h1>5. IT Consulting:</h1>
     <img src={i} alt='i' />     <img src={i1} alt='i1' />
     <p> With our IT consulting services, we provide expert guidance and support to optimize your IT infrastructure.
      From technology assessments to system implementation and cybersecurity solutions, 
        we ensure your business operates efficiently and securely. </p>

    <h1>6. Cloud Services: </h1>
    <img src={c} alt='c' />     <img src={c1} alt='c1'/>
    <p>  Embrace the power of the cloud with our comprehensive cloud services. 
     We assist in cloud migration, deployment, and management, enabling you to leverage scalable and 
    cost-effective cloud solutions tailored to your business needs. </p>

   <h1>7. E-commerce Solutions:</h1>
   <img src={ec} alt='ec'/>     <img src={ec1} alt='ec1'/>
   <p>Our e-commerce solutions help you establish a robust online store and maximize your sales potential.
    We build customized e-commerce websites, integrate secure payment gateways, optimize product listings, 
     and implement effective marketing strategies to boost your online business. </p>

     <h1>8. Content Writing and Copywriting: </h1>
    <img src={cw} alt='cw'/>     <img src={cw1} alt='cw1'/>
    <p>Engage your target audience with compelling content and persuasive copy.
      Our team of experienced writers creates engaging website content, blog posts, articles,
     product descriptions, and copy that captivate your readers and drive conversions. </p>

      <h1>9. UI/UX Design: </h1>
     <img src={uud} alt='uud'/>     <img src={uud1} alt='uud1`'/>
     <p>We focus on creating intuitive and user-friendly interfaces to enhance the overall user experience. 
       Our UI/UX designers combine creativity with usability to design visually appealing and highly functional 
   digital products. </p>

    <h1>10. Project Management:  </h1>
   <img src={p} alt='p'/>     <img src={p1} alt='p1'/>
   <p>  Our project management services ensure efficient planning, execution, and delivery of your projects.
    We apply industry best practices to manage resources, timelines, and budgets effectively,
      ensuring successful project outcomes. </p>

    <p>At [ROYAL TECHNOLOGIES], we are committed to delivering excellence in every service we offer. 
      Contact us today to discuss your requirements and let our experts help you achieve your goals.</p>
    </div>
  )
}

export default Service;