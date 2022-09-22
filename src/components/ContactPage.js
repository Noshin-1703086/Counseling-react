import React,{useState} from 'react';
import '../App.css';
import './ContactPage.css';
import axios from 'axios';

function ContactPage() {
    const [data, setData] = useState({
        name:"",
        email:"",
        message:"",
});
const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:4000/api/Contact_post";
        const { data: res } = await axios.post(url,data);
        console.log(res.message);
        } 
    catch (error) {
        console.log(error)
        }
    };
  return (
    <div>
      <div className='contact-container'>
            <div className='contact-head'>
                <h3>We'd  <i class="fa-regular fa-heart"></i> to help</h3>
            </div>
            <div className='contact-text-container'>
                <div className='contact-text'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" id="name" placeholder='NAME' onChange={handleChange} value={data.name} required/>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder='EMAIL' onChange={handleChange} value={data.email} required/>
                        </div>
                        <div>
                            <textarea type="text" name="message" id="message" placeholder='MESSAGE' onChange={handleChange} value={data.message} required/>
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
