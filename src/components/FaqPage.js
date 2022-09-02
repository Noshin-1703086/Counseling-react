import React,{useState} from 'react';
import { questions } from './faqapi';
import QuesAns from './QuesAns';
import '../App.css';
import './FaqPage.css';

const FaqPage = () => {
 const [data, setData] = useState(questions);
  return (
    <>
     <div className='faq-head'>
        <h3>Frequently Asked Questions</h3>
     </div>
     {
       data.map((curElem) => {
         const{ id } = curElem;
         return < QuesAns key = {id} {...curElem}/>
        })
      }
   </>
 );
}

export default FaqPage;
