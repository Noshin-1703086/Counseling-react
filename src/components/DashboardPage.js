import axios from 'axios';
import React,{Component} from 'react';
import '../App.css';
import './DashboardPage.css';

export default class DashboardPage extends Component {
  componentDidMount(){
    const config = {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
      
    };
    axios.get('user', config).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  render(){
    return(
      <h2>You are not logged in</h2>
    )
  }
}