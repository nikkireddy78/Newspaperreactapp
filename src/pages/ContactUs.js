import React from 'react';
import Footer from '../components/Footer';
import '../css/contactUs.css';
import Navbar from '../components/Navbar';
 
export default function ContactUs() {
  return (
    <div>
      <Navbar/>
     <div> 
      <h3 className='contact-tag'>Need specific help? Get in touch with us!</h3>
      <p className='para1'>Need to get in touch with our Team? We’re all ears! Here are <br/>some ways to contact us.
      Feel free to reach us through our email.<br></br></p>

 
      <div>
         
        <div>
          <h1 className='email-tag'><b>
            Email us</b></h1>
          <p className='para1'>Our Support Team is always happy to answer your questions.<br></br>
 We will reply as soon as possible!
</p>
        <a class="mail" href="mailto:sapnakhatri161998@gmail.com">Email Our Team &gt;</a>
       
        </div>
 
      </div>
      </div>
     <div className='bottomFooter'><Footer/></div>
    </div>
    
 
  );
}