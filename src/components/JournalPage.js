import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './JournalPage.css';
import axios from 'axios';

const JournalPage = () => {
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
        text:"",
	});
    const handleChange2 = ({ currentTarget: input }) => {
      setData({ ...data,[input.name]: input.value });
      axios.get('http://localhost:4000/api/J_getinfo',{
        params: {
          token: localStorage.getItem('token'),
          date: input.value,
        }})
        .then(res => {
          setData({ ...data, text:res.data,[input.name]: input.value});
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
            const url = "http://localhost:4000/api/J_post";
            const { data: res } = await axios.post(url,{
                params: {
                  token: localStorage.getItem('token'),
                  data: data,
                }});
                navigate("/journal");
            console.log(res.message);
            } catch (error) {
            console.log(error)
            }
        };
    return (
        <div>
                <div className='journal-container'>
                    <div className='journal-text'>
                        <div className='journal-head'>
                            <h3>TODAY I AM GRATEFUL</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='journal-date'>
                                <label id="Date">DATE</label><br/>
                                <input type='date' id="Date" name="date" onChange={handleChange2} value={data.date} required/>
                            </div>
                            <div className='journal-text'>
                                <textarea type='textarea' id="Text" rows="1" cols="46" name="text" 
                                placeholder="List the things you are grateful for today!" onChange={handleChange} value={data.text} required/>
                            </div>
                            <div className='journal_sendbutton2'>
                                <input type='submit' value="Save Changes"/>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
      );
     };   
        
export default JournalPage;
    