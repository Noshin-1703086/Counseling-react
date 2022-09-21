import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './DailytrackerPage.css';
import axios from 'axios';

const DailytrackerPage = () => {
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
        mood:"",
        neg_thought_manage:"",
        therapy_practice:"",
        suicidal_thought:"",
        suicidal_ideation:"",
        homework:"",
        relaxation:"",
        appetite:"",
        sleep:"",
        psychotherapy:"",
        psychiatrist:"",
        medication:"",
	});
    const handleChange2 = ({ currentTarget: input }) => {
        setData({ ...data,[input.name]: input.value });
        axios.get('http://localhost:4000/api/daily_track_getinfo',{
          params: {
            token: localStorage.getItem('token'),
            date: input.value,
          }})
          .then(res => {
              console.log(res.data)
            setData({ ...data, 
            mood:"",
            neg_thought_manage:"",
            therapy_practice:"",
            suicidal_thought:"",
            suicidal_ideation:"",
            homework:"",
            relaxation:"",
            appetite:"",
            sleep:"",
            psychotherapy:"",
            psychiatrist:"",
            medication:"",
            [input.name]: input.value});
            if(res.data!=false)
            {
              setData({ ...data,   
              mood:res.data.mood,
              neg_thought_manage:res.data.neg_thought_manage,
              therapy_practice:res.data.therapy_practice,
              suicidal_thought:res.data.suicidal_thought,
              suicidal_ideation:res.data.suicidal_ideation,
              homework:res.data.homework,
              relaxation:res.data.relaxation,
              appetite:res.data.appetite,
              sleep:res.data.sleep,
              psychotherapy:res.data.psychotherapy,
              psychiatrist:res.data.psychiatrist,
              medication:res.data.medication,
              [input.name]: input.value});
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
            const url = "http://localhost:4000/api/daily_track";
            const { data: res } = await axios.post(url,{
                params: {
                  token: localStorage.getItem('token'),
                  data: data,
                }});
            navigate("/dailytracker");
            console.log(res.message);
            } catch (error) {
            console.log(error)
            }
        };
    
return (
    <div>
            <div className='daily_track-text-container'>
                <div className='daily_track-text'>
                    <div className='daily_track-head'>
                        <h3>MENTAL HEALTH TRACKER</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="daily_track_partition1">
                        <div className='Name_class_daily_track'>
                                <label id="Date">DATE</label><br/>
                                <input type='date' id="Date" name="date" onChange={handleChange2} value={data.date} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="mood">MOOD (%)</label><br/>
                                <input type='number' min='0' max='100' id="mood" name="mood" onChange={handleChange} value={data.mood} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                            <label id="neg_thought_manage">NEGATIVE THOUGHT MANAGE (%)</label><br/>
                                <input type='number' min='0' max='100' id="neg_thought_manage" name="neg_thought_manage" onChange={handleChange} value={data.neg_thought_manage} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="therapy_practice">THERAPY PRACTICE (%)</label><br/>
                                <input type='number' min='0' max='100' id="therapy_practice" name="therapy_practice" onChange={handleChange} value={data.therapy_practice} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="suicidal_thought">SUICIDAL THOUGHTS (%)</label><br/>
                                <input type='number' min='0' max='100' id="suicidal_thought" name="suicidal_thought" onChange={handleChange} value={data.suicidal_thought} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="suicidal_thought">SUICIDAL IDEATION (%)</label><br/>
                                <input type='number' min='0' max='100' id="suicidal_ideation" name="suicidal_ideation" onChange={handleChange} value={data.suicidal_ideation} required/>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="homework">HOMEWORK</label><br/>
                                <select name="homework" id="homework" minlength="1" onChange={handleChange} value={data.homework} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="relaxation">RELAXATION</label><br/>
                                <select name="relaxation" id="relaxation" minlength="1" onChange={handleChange} value={data.relaxation} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="appetite">APPETITE REGULATION</label><br/>
                                <select name="appetite" id="appetite" minlength="1" onChange={handleChange} value={data.appetite} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="sleep">SLEEP REGULATION</label><br/>
                                <select name="sleep" id="sleep" minlength="1" onChange={handleChange} value={data.sleep} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="psychotherapy">PSYCHOTHERAPY SESSION</label><br/>
                                <select name="psychotherapy" id="psychotherapy" minlength="1" onChange={handleChange} value={data.psychotherapy} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="psychiatrist">PSYCHIATRIST VISIT</label><br/>
                                <select name="psychiatrist" id="psychiatrist" minlength="1" onChange={handleChange} value={data.psychiatrist} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        <div className='Name_class_daily_track'>
                                <label id="medication">MEDICATION</label><br/>
                                <select name="medication" id="medication" minlength="1" onChange={handleChange} value={data.medication} required>
                                <option value=""></option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </div>
                        </div>
                        <div className='daily_track_sendbutton2'>
                                <input type='submit' value="Save Changes"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default DailytrackerPage;
    