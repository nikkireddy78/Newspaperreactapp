import React from 'react';
import './HeroSection.css';
import './Button.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginInitial() {

  return (
    <div><Navbar />
      <div className='LoginAs' >


        <div className='logintag' >
          <h1 >Login As</h1>
        </div>

        <div>

          <Link to='/login' className='btn-mobile'>

            <button className="buttonCust" ><span>Customer</span></button>
          </Link>


          <Link to='/staff-login' className='btn-mobile'>

            <button class="buttonStaf">

              <span>Staff</span></button>
          </Link>

        </div>

      </div>
      <div className='bottomFooter'><Footer /></div>
    </div>
  );



}