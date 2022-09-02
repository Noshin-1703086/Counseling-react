import React,{useState} from 'react';

const QuesAns = ({question,answer}) => {
    const [show, setShow] = useState(false);
  return (
    <div>
    <div className='faq-container'>
       <ul className='question-container'>
         <li className='question-head'>
           <div className='question'>
           <p>{question}</p><i onClick={() => setShow(!show)} class = { show? "fa-solid fa-caret-up" : "fa-solid fa-caret-down" }></i>
           </div>
           <div className='answer'>
             {show && <p>{answer}</p>}
           </div>
         </li>
       </ul>
    </div>
</div>
  );
}

export default QuesAns;
