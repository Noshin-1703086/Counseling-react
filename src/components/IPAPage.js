import { NavLink, useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './IPAPage.css';
import axios from 'axios';

const IPAPage = () => {
    const [user, setUser] =useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/api/getinfo',{
      params: {
        token: localStorage.getItem('token')
      }})
      .then(res => {
        setUser(res.data);
      }).catch(err => {
        console.log(err)
      })
  })
	const [data, setData] = useState({
		name: "",
		gender: "",
        economic_status: "",
        age: "",
        blood_group: "",
        marital_status: "",
        location: "",
        occupation: "",
        contact: "",
        contact2: "",
        date_of_birth: "",
        illness: "",
        problem: "",
        service_type: "",
        bkash_no: "",
        transaction_no: "",
	});
    
	const navigate = useNavigate();
     
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    
const handleSubmit = async (e) => {
	e.preventDefault();
	try {
		const url = "http://localhost:4000/api/book";
		const { data: res } = await axios.post(url,{
            params: {
              token: localStorage.getItem('token'),
              data: data
            }});
		navigate("/Confirm");
		console.log(res.message);
		} catch (error) {
		console.log(error)
		}
	};

return (
    <div>
            <div className='IPA-text-container'>
                <div className='IPA-text'>
                    <div className='IPA-head'>
                        <h3>PERSONAL DETAILS</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='Name_class_ipa'>
                            <label id="Name">NAME</label><br/>
                            <input type="text" name="name" id="Name" maxlength="50" onChange={handleChange} value={data.name} required/>
                        </div>
                        <div className="row-input">
                        <div className='Name_class_ipa'>
                            <label id="Gender">GENDER</label><br/>
                            <select name="gender" id="Gender" minlength="1" onChange={handleChange} value={data.gender} required>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className='Name_class_ipa2'>
                            <label id="E_Status">SOCIO-ECONOMIC STATUS</label><br/>
                            <select name="economic_status" id="E_Status" minlength="1" onChange={handleChange} value={data.economic_status} required>
                                <option value=""></option>
                                <option value="Upper Class">Upper Class</option>
                                <option value="Upper Middle Class">Upper Middle Class</option>
                                <option value="Lower Middle Class">Lower Middle Class</option>
                                <option value="Lower Class">Lower Class</option>
                            </select>
                        </div>
                        </div>
                        <div className="row-input2">
                        <div className='Name_class_ipa3'>
                            <label id="Age">AGE</label><br/>
                            <input type="number" name="age" id="Age" min="1" max="100" onChange={handleChange} value={data.age} required/>
                        </div>
                        <div className='Name_class_ipa3'>
                            <label id="Blood">BLOOD GROUP</label><br/>
                            <select name="blood_group" id="Blood" minlength="1" onChange={handleChange} value={data.blood_group} required>
                                <option value=""></option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className='Name_class_ipa3'>
                            <label id="M_Status">MARITAL STATUS</label><br/>
                            <select name="marital_status" id="M_Status" minlength="1" onChange={handleChange} value={data.marital_status} required>
                                <option value=""></option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                        </div>
                        <div className="row-input3">
                        <div className='Name_class_ipa4'>
                            <label id="Location">PLACE OF LIVING</label><br/>
                            <input type="text" name="location" id="Location" maxlength="50" onChange={handleChange} value={data.location} required/>
                        </div>
                        <div className='Name_class_ipa4'>
                            <label id="Occupation">OCCUPATION</label><br/>
                            <input type="text" name="occupation" id="Occupation" maxlength="50" onChange={handleChange} value={data.occupation} required/>
                        </div>
                        </div>
                        <div className="row-input3">
                        <div className='Name_class_ipa4'>
                            <label id="Contact">CONTACT NUMBER</label><br/>
                            <input type="tel" name="contact" id="Contact" minlength="11" maxlength="11" pattern="[0]{1}[1]{1}[0-9]{9}" onChange={handleChange} value={data.contact} required/>
                        </div>
                        <div className='Name_class_ipa4'>
                            <label id="Contact2">EMERGENCY CONTACT NUMBER</label><br/>
                            <input type="tel" name="contact2" id="Contact2" minlength="11" maxlength="11" pattern="[0]{1}[1]{1}[0-9]{9}" onChange={handleChange} value={data.contact2} required/>
                        </div>
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Date_of_birth">DATE OF BIRTH</label><br/>
                            <input type="date" name="date_of_birth" id="Date_of_birth" onChange={handleChange} value={data.date_of_birth} required/>
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Illness">PHYSICAL ILLNESS</label><br/>
                            <input type="text" name="illness" id="Illness" maxlength="100" onChange={handleChange} value={data.illness} required/>
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Problem">CHIEF COMPLAINTS</label><br/>
                            <input type="text" name="problem" id="Problem" maxlength="100" onChange={handleChange} value={data.problem} required/>
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Service_type">TYPE OF SERVICE</label><br/>
                            <select name="service_type" id="Service_type" minlength="1" onChange={handleChange} value={data.service_type} required>
                                <option value=""></option>
                                <option value="Individual">Individual Psychotherapy</option>
                                <option value="Couples">Couples Therapy</option>
                                <option value="Family">Family Therapy</option>
                            </select>
                        </div>
                        <div className='IPA-head'>
                        <h3>PAYMENT INFORMATION</h3>
                        </div>
                        <div className='IPA-pay'>
                            <div className="IPA-pay-text">
                                <div className="IPA-pay-text-head">
                                    <h3>Bkash account no.</h3>
                                </div>
                                <div className="IPA-pay-text-info">
                                    <h3>01700000000</h3>
                                </div>
                            </div>
                            <div className="IPA-pay-text">
                                <div className="IPA-pay-text-head">
                                    <h3>Bkash amount</h3>
                                </div>
                                <div className="IPA-pay-text-info">
                                    <h3>Tk. 1530</h3>
                                </div>
                            </div>
                            <div className="IPA-pay-text">
                                <div className="IPA-pay-text-head">
                                    <h3>Bkash option</h3>
                                </div>
                                <div className="IPA-pay-text-info">
                                    <h3>Payment {'>'} Counter: 1 {'>'} Reference: (Username)</h3>
                                </div>
                            </div>
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Bkash_no">YOUR BKASH ACCOUNT NO.</label><br/>
                            <input type="tel" name="bkash_no" id="Bkash_no" minlength="11" maxlength="11" pattern="[0]{1}[1]{1}[0-9]{9}" onChange={handleChange} value={data.bkash_no} required/> 
                             
                        </div>
                        <div className='Name_class_ipa'>
                            <label id="Transaction_no">BKASH TRANSACTION ID.</label><br/>
                            <input type="text" name="transaction_no" id="Transaction_no" minlength="10" maxlength="10" onChange={handleChange} value={data.transaction_no} required/> 
                    
                        </div>
                        <div className='ipa_sendbutton2'>
                        <input type='submit' value="Book Appointment"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default IPAPage;
    