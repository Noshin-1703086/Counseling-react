import React,{useState,useEffect} from 'react';
import '../App.css';
import './DashboardPage.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const DashboardPage=() => {
  useEffect(() => {
    axios.get('http://localhost:4000/api/get_session_info',{
          params: {
            token: localStorage.getItem('token')
          }})
          .then(res => {
              if(res.data!=false)
              {
                  window.location = "/Dashboard_C";
              }
          }).catch(err => {
            console.log(err)
          })
      })

  return (
    <div className='dash-container'>
      <div className='dash-text-container'>
      <div className='dash-head'>
        <h3>INITIAL PSYCHOLOGICAL ASSESSMENT</h3>
        <hr/>
      </div>
      <div className='dash-text'>
        <p>Initial psychological assessment (IPA) is the first step of taking help for your mental wellbeing. 
          In this session, you will talk with a professional to help decide what kind of support you need. 
          In an IPA session a mental health professional will guide you to talk about your needs which will 
          cover symptoms and experiences, feelings, thoughts and actions, physical health and wellbeing, medical 
          and psychological history, housing and financial circumstances, employment and training needs, social 
          and family relationships, use of drugs and alcohol, past experiences of similar problems, your safety 
          and other people's, strengths and skills, hopes and aspirations for the future etc. You can share as little 
          or as much as you want. This will help to diagnose the problem areas, causes and design a treatment plan for 
          you and work on with you. </p>
      </div>
      </div>
      <div className='sendbutton4'>
      <NavLink to = '/IPA'><Button className='submit_ipa'>Book Appointment Now</Button></NavLink>
      </div>
    </div>
  );
}

export default DashboardPage;