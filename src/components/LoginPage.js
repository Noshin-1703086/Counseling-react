import { NavLink} from "react-router-dom";
import React from 'react';
import '../App.css';
import './LoginPage.css';

const LoginPage = () => {
return (
    <div>
            <div className='Login-text-container'>
                <div className='Login-text'>
                    <div className='Login-head'>
                        <h3>Welcome to Hope</h3>
                    </div>
                    <form>
                        <div className='Name_class2'>
                            <label id="Username">USERNAME / EMAIL</label><br/>
                            <input type="text" name="username" id="Userame"  required/>
                        </div>
                        <div className='Name_class2'>
                            <label id="Password">PASSWORD</label><br/>
                            <input type="password" name="password" id="Password" required/>
                        </div>
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
    