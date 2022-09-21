import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './SessiontrackerPage.css';
import axios from 'axios';

const SessiontrackerPage = () => {
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
  const [data, setData] = useState({
        date:"",
        prev_wellbeing:"",
        post_wellbeing:"",
        motivation:"",
        prev_homework:"",
        summary:"",
        new_homework:"",
        agenda:"",
	});
    const handleChange2 = ({ currentTarget: input }) => {
        setData({ ...data,[input.name]: input.value });
        axios.get('http://localhost:4000/api/session_track_getinfo',{
          params: {
            token: localStorage.getItem('token'),
            date: input.value,
          }})
          .then(res => {
              console.log(res.data)
            setData({ ...data,prev_wellbeing:"",post_wellbeing:"",motivation:"",prev_homework:"",summary:"",new_homework:"",agenda:"",[input.name]: input.value});
            if(res.data!=false)
            {
              setData({ ...data,  prev_wellbeing:res.data.prev_wellbeing,post_wellbeing:res.data.post_wellbeing,motivation:res.data.motivation,
              prev_homework:res.data.prev_homework,summary:res.data.summary,new_homework:res.data.new_homework,agenda:res.data.agenda,[input.name]: input.value});
            }
          }).catch(err => {
            console.log(err)
          })
      };
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/session_track";
            const { data: res } = await axios.post(url,{
                params: {
                  token: localStorage.getItem('token'),
                  data: data,
                }});
            navigate("/sessiontracker");
            console.log(res.message);
            } catch (error) {
            console.log(error)
            }
        };
    
return (
    <div>
            <div className='s_assess-text-container'>
                <div className='s_assess-text'>
                    <div className='s_assess-head'>
                        <h3>REGULAR SESSION ASSESSMENT</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="partition1">
                        <div className='Name_class_s_assess'>
                                <label id="Date">DATE</label><br/>
                                <input type='date' id="Date" name="date" onChange={handleChange2} value={data.date} required/>
                        </div>
                        <div className='Name_class_s_assess'>
                                <label id="wellbeing1">WELLBEING BEFORE SESSION (%)</label><br/>
                                <input type='number' min='0' max='100' id="wellbeing1" name="prev_wellbeing" onChange={handleChange} value={data.prev_wellbeing} required/>
                        </div>
                        <div className='Name_class_s_assess'>
                                <label id="wellbeing2">WELLBEING AFTER SESSION (%)</label><br/>
                                <input type='number' min='0' max='100' id="wellbeing2" name="post_wellbeing" onChange={handleChange} value={data.post_wellbeing} required/>
                        </div>
                        <div className='Name_class_s_assess'>
                                <label id="motivation">MOTIVATION (%)</label><br/>
                                <input type='number' min='0' max='100' id="motivation" name="motivation" onChange={handleChange} value={data.motivation} required/>
                        </div>
                        <div className='Name_class_s_assess'>
                                <label id="prev_homework">PREVIOUS HOMEWORK</label><br/>
                                <select name="prev_homework" id="prev_homework" minlength="1" onChange={handleChange} value={data.prev_homework} required>
                                <option value=""></option>
                                <option value="Done">DONE</option>
                                <option value="Not Done">NOT DONE</option>
                            </select>
                        </div>
                        </div>
                        <div className='s_assess-head2'>
                        <h3>SESSION SUMMARY</h3>
                        </div>
                        <div className='Name_class_s_assess2'>
                            <textarea type='textarea' placeholder="Write a summary of your session" id="summary" maxLength="420"  name="summary" onChange={handleChange} value={data.summary} required/>
                        </div>
                        <div className='s_assess-head3'>
                        <h3>HOMEWORK</h3>
                        <h3>NEXT AGENDA</h3>
                        </div>
                        <div className='Name_class_s_assess2'>
                            <textarea type='textarea' placeholder="List your assignments" id="new_homework" maxLength="220"  name="new_homework" onChange={handleChange} value={data.new_homework} />
                            <textarea type='textarea' placeholder="Write your next agenda" id="agenda" maxLength="220"  name="agenda" onChange={handleChange} value={data.agenda} />
                        </div>
                        <div className='s_assess_sendbutton2'>
                                <input type='submit' value="Save Changes"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default SessiontrackerPage;
    