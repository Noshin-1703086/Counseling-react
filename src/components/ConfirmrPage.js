import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './ConfirmrPage.css';
import axios from 'axios';

const Confirm_rPage = () => {
  useEffect(() => {
    axios.get('http://localhost:4000/api/check_confirmation',{
      params: {
        token: localStorage.getItem('token')
      }})
      .then(res => {
        if(res.data===false)
        {
            window.location = "/IPA";
        }
      }).catch(err => {
        console.log(err)
      })
  })
  const [therapist, setTherapist] =useState('');
  const [type, setType] =useState('');
  useEffect(() => {
  axios.get('http://localhost:4000/api/getschedule',{
        params: {
          token: localStorage.getItem('token')
        }})
        .then(res => {
            setTherapist(res.data.therapist);
            setType(res.data.service_type);
            console.log(res.data);
        }).catch(err => {
          console.log(err)
        })
    })
  const [data, setData] = useState({
		time: "",
        date:"",
	});
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/confirm";
            const { data: res } = await axios.post(url,{
                params: {
                  token: localStorage.getItem('token'),
                  data: data,
                  type: type
                }});
            navigate("/Dashboard_C");
            console.log(res.message);
            } catch (error) {
            console.log(error)
            }
        };
    
return (
    <div>
            <div className='confirmr-text-container'>
                <div className='confirmr-text'>
                    <div className='confirmr-head'>
                        <h3>APPOINTMENT INFORMATION</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='Name_class_confirmr'>
                            <label id="Type">TYPE OF SESSION</label><br/>
                            <div className="confirmr_value">
                                <h3>Regular {type}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirmr'>
                            <label id="Duration">SESSION DURATION</label><br/>
                            <div className="confirmr_value">
                                <h3>45 minutes</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirmr'>
                            <label id="Charge">SESSION CHARGE</label><br/>
                            <div className="confirmr_value">
                                <h3>Tk. 1500</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirmr'>
                            <label id="Therapist">THERAPIST</label><br/>
                            <div className="confirmr_value">
                                <h3>{therapist}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirmr'>
                            <label id="Date">SESSION DATE</label><br/>
                            <input type='date'id="Date" name="date" onChange={handleChange} value={data.date} required/>
                        </div>
                        <div className='Name_class_confirmr'>
                            <label id="Time">SESSION TIME</label><br/>
                            <select name="time" id="Time" minlength="1" onChange={handleChange} value={data.time} required>
                                <option value=""></option>
                                <option value="10:00 am">10:00 AM</option>
                                <option value="11:00 am">11:00 AM</option>
                                <option value="5:00 pm">5:00 PM</option>
                                <option value="7:00 pm">7:00 PM</option>
                            </select>
                        </div>
                        <div className='confirmr_sendbutton2'>
                        <input type='submit' value="Confirm Appointment"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default Confirm_rPage;
    