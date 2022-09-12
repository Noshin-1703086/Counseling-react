import React from 'react';
import '../App.css';
import './ContactPage.css';

function ContactPage() {
  return (
    <div>
      <div className='contact-container'>
            <div className='contact-head'>
                <h3>We'd  <i class="fa-regular fa-heart"></i> to help</h3>
            </div>
            <div className='contact-text-container'>
                <div className='contact-text'>
                    <form action="">
                        <div>
                            <input type="text" name="Name" id="Name" placeholder='NAME'/>
                        </div>
                        <div>
                            <input type="text" name="Email" id="Email" placeholder='EMAIL'/>
                        </div>
                        <div>
                            <textarea type="text" name="Message" id="Message" placeholder='MESSAGE'/>
                        </div>
                        <div className='sendbutton'>
                        <button type='Submit'>SEND</button>
                        </div>
                    </form>
                </div>
                <div className='contact-text2-head'>
                <div className='contact-text2'>
                    <ul className='contact-text2-2'>
                    <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <div className='address'>
                        <h3>ABC Tower, Dhanmondi</h3>
                        <h4>Dhaka, Bangladesh</h4>
                    </div>
                    </li>
                    <li><i class="fa-solid fa-phone"></i><h3>+8801700000000</h3></li>
                    <li><i class="fa-solid fa-envelope"></i><h3>hope@gmail.com</h3></li>
                    </ul>
                </div>
               <div className='contact-text2-3'> 
                    <hr/>
                </div>
                <div className='contact-icon'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-square-google-plus"></i>
                </div>
            </div>
            </div>
  </div>
    </div>
  );
}

export default ContactPage;
