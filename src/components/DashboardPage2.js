import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './DashboardPage2.css';
import axios from 'axios';

const DashboardPage2 = () => {
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
  const [type, setType] =useState('');
  const [therapist, setTherapist] =useState('');
  const [date, setDate] =useState('');
  const [time, setTime] =useState('');
  const [link, setLink] =useState('');
  useEffect(() => {
  axios.get('http://localhost:4000/api/get_session_info',{
        params: {
          token: localStorage.getItem('token')
        }})
        .then(res => {
            if(res.data==false)
            {
                window.location = "/Dashboard";
            }
            setType(res.data.type);
            setTherapist(res.data.therapist);
            setDate(res.data.date);
            setTime(res.data.time);
            setLink(res.data.link);
        }).catch(err => {
          console.log(err)
        })
    })
return (
    <div>
            <div className='c_dash-text-container'>
                <div className='c_dash_confirm-text'>
                    <div className='c_dash_confirm-head'>
                        <h3>SESSION INFORMATION</h3>
                    </div>
                    <form>
                        <div className='Name_class_confirm'>
                            <label id="Type">TYPE OF SESSION</label><br/>
                            <div className="confirm_value">
                                <h3>{type}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Duration">SESSION DURATION</label><br/>
                            <div className="confirm_value">
                                <h3>45 minutes</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Charge">SESSION CHARGE</label><br/>
                            <div className="confirm_value">
                                <h3>Tk. 1500</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Therapist">THERAPIST</label><br/>
                            <div className="confirm_value">
                                <h3>{therapist}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Date">SESSION DATE</label><br/>
                            <div className="confirm_value">
                                <h3>{date}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Time">SESSION TIME</label><br/>
                            <div className="confirm_value">
                                <h3>{time}</h3>
                            </div>
                        </div>
                        <div className='Name_class_confirm'>
                            <label id="Link">SESSION LINK</label><br/>
                            <div className="confirm_value">
                                <h3>{link}</h3>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default DashboardPage2;
    