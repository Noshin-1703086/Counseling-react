import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import '../App.css';
import './BookrPage.css';
import axios from 'axios';

const BookrPage = () => {
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
        bkash_no: "",
        transaction_no: "",
	});
    
	const navigate = useNavigate();
     
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    
const handleSubmit = async (e) => {
	e.preventDefault();
	try {
		const url = "http://localhost:4000/api/book_r";
		const { data: res } = await axios.post(url,{
            params: {
              token: localStorage.getItem('token'),
              data: data
            }});
		navigate("/Confirm_r");
		console.log(res.message);
		} catch (error) {
		console.log(error)
		}
	};

return (
    <div>
            <div className='Book-text-container'>
                <div className='Book-text'>
                <div className='Book-head'>
                        <h3>PAYMENT INFORMATION</h3>
                        </div>
                    <form onSubmit={handleSubmit}>
                        <div className='book-pay'>
                            <div className="book-pay-text">
                                <div className="book-pay-text-head">
                                    <h3>Bkash account no.</h3>
                                </div>
                                <div className="book-pay-text-info">
                                    <h3>01700000000</h3>
                                </div>
                            </div>
                            <div className="book-pay-text">
                                <div className="book-pay-text-head">
                                    <h3>Bkash amount</h3>
                                </div>
                                <div className="book-pay-text-info">
                                    <h3>Tk. 1530</h3>
                                </div>
                            </div>
                            <div className="book-pay-text">
                                <div className="book-pay-text-head">
                                    <h3>Bkash option</h3>
                                </div>
                                <div className="book-pay-text-info">
                                    <h3>Payment {'>'} Counter: 1 {'>'} Reference: (Username)</h3>
                                </div>
                            </div>
                        </div>
                        <div className='Name_class_book'>
                            <label id="Bkash_no">YOUR BKASH ACCOUNT NO.</label><br/>
                            <input type="tel" name="bkash_no" id="Bkash_no" minlength="11" maxlength="11" 
                            pattern="[0]{1}[1]{1}[0-9]{9}" onChange={handleChange} value={data.bkash_no} required/> 
                             
                        </div>
                        <div className='Name_class_book'>
                            <label id="Transaction_no">BKASH TRANSACTION ID.</label><br/>
                            <input type="text" name="transaction_no" id="Transaction_no" minlength="10" maxlength="10" 
                            onChange={handleChange} value={data.transaction_no} required/> 
                    
                        </div>
                        <div className='book_sendbutton2'>
                        <input type='submit' value="Book Appointment"/>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  );
 };   
export default BookrPage;
    