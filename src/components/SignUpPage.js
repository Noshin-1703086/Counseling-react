import { NavLink, useNavigate } from "react-router-dom";
import React,{useState} from 'react';
import '../App.css';
import './SignUpPage.css';
import axios from 'axios';

const SignUpPage = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
        repeat_password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
const handleSubmit = async (e) => {
	e.preventDefault();
	try {
		const url = "http://localhost:4000/api/users";
		const { data: res } = await axios.post(url, data);
		navigate("/Login");
		console.log(res.message);
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
            <div className='SignUp-text-container'>
                <div className='SignUp-text'>
                    <div className='SignUp-head'>
                        <h3>CREATE ACCOUNT</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='Name_class'>
                            <label id="Username">USERNAME</label><br/>
                            <input type="text" name="username" id="Username" maxlength="30" onChange={handleChange} value={data.username} required/>
                        </div>
                        <div className='Name_class'>
                            <label id="Email">EMAIL</label><br/>
                            <input type="text" name="email" id="Email" onChange={handleChange} value={data.email} required/>
                        </div>
                        <div className='Name_class'>
                            <label id="Password">PASSWORD</label><br/>
                            <input type="password" name="password" id="Password" minlength="10" maxlength="20" onChange={handleChange} value={data.password} required/>
                        </div>
                        <div className='Name_class'>
                            <label id="R_Password">CONFIRM PASSWORD</label><br/>
                            <input type="password" name="repeat_password" id="R_Password" minlength="10" maxlength="20" onChange={handleChange} value={data.r_password} required/>
                        </div>
                        {error && <div className="error">{error}</div>}
                        <div className='sendbutton2'>
                        <input type='submit' value="SIGN UP"/>
                        </div>
                        <div className='button_bottom'>
                            <h4>Have already an account? <NavLink  to="/Login" className="button_bottom_navdata">Log in</NavLink></h4>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default SignUpPage;
    