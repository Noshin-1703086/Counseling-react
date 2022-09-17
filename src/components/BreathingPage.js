import React,{useState,useEffect,useCallback}  from 'react';
import '../App.css';
import './BreathingPage.css';
import axios from 'axios';


const BreathingPage=() =>{
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
              }).catch(err => {
                console.log(err)
              })
          })
        
  return (
    <div>
    <div className='breathing-full'>
    <div className='breathing-head'>
        <h3>BREATHING EXERCISE</h3>
    </div>
    <div className='box'>
      <div class="zoom-in-out-box">
      </div>
    </div>
    <div className='breathing-head2'>
    <span> </span>
    </div>
      </div>
      </div>
  );
}

export default BreathingPage;
