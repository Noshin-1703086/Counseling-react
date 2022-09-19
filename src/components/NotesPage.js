import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './NotesPage.css';
import axios from 'axios';

const NotesPage = () => {
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
            title:"",
            text:"",
	});
    const handleChange2 = ({ currentTarget: input }) => {
      setData({ ...data,[input.name]: input.value });
      axios.get('http://localhost:4000/api/N_getinfo',{
        params: {
          token: localStorage.getItem('token'),
          date: input.value,
        }})
        .then(res => {
            console.log(res.data)
          setData({ ...data, text:"",title:"",[input.name]: input.value});
          if(res.data!=false)
          {
            setData({ ...data, text:res.data.text,title:res.data.title,[input.name]: input.value});
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
            const url = "http://localhost:4000/api/N_post";
            const { data: res } = await axios.post(url,{
                params: {
                  token: localStorage.getItem('token'),
                  data: data,
                }});
                navigate("/notes");
            console.log(res.message);
            } catch (error) {
            console.log(error)
            }
        };
    return (
        <div>
                <div className='note-container'>
                    <div className='note-text'>
                        <div className='note-head'>
                            <h3>NOTES</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='note-date'>
                                <label id="Date">DATE</label><br/>
                                <input type='date' id="Date" name="date" onChange={handleChange2} value={data.date} required/>
                            </div>
                            <div className='note-title'>
                                <input type='text' id="Title" name="title" placeholder="WRITE YOUR TITLE" onChange={handleChange} value={data.title} required/>
                            </div>
                            <div className='note-text'>
                                <textarea type='textarea' id="Text" rows="1" cols="46" name="text" onChange={handleChange} value={data.text} required/>
                            </div>
                            <div className='note_sendbutton2'>
                                <input type='submit' value="Save Changes"/>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
      );
     };   
        
export default NotesPage;
    