import {NavLink,Link} from "react-router-dom";
import React,{ useState } from 'react';
import '../App.css';
import './LoginPage.css';
import axios from "axios";

const LoginPage = () => {
    const [data, setData] = useState({ 
        email: "", 
        password: "" 
    });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message.replace(/["]/g, ''));
			}
		}
	};
return (
    <div>
            <div className='Login-text-container'>
                <div className='Login-text'>
                    <div className='Login-head'>
                        <h3>Welcome to Hope</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='Name_class2'>
                            <label id="Username">USERNAME / EMAIL</label><br/>
                            <input type="text" name="email" id="Email" onChange={handleChange} value={data.email} required/>
                        </div>
                        <div className='Name_class2'>
                            <label id="Password">PASSWORD</label><br/>
                            <input type="password" name="password" id="Password" onChange={handleChange} value={data.password} required/>
                        </div>
                        {error && <div className="error2">{error}</div>}
                        <div className='sendbutton3'>
                        <input type='submit' value="SIGN IN"/>
                        </div>
                        <div className='button_bottom2'>
                            <h4>Don't have an account yet? <NavLink  to="/SignUp" className="button_bottom_navdata2">Register</NavLink></h4>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default LoginPage;
    