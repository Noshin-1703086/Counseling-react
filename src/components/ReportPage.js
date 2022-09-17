import React,{useState,useEffect}  from 'react';
import '../App.css';
import './ReportPage.css';
import axios from 'axios';
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";


const ReportPage=() =>{
    const [id, setId] =useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/api/get_session_info',{
              params: {
                token: localStorage.getItem('token')
              }})
              .then(res => {
                  if(res.data==false)
                  {
                      window.location = "/Dashboard";
                  }
              }).catch(err => {
                console.log(err)
              })
          })
          useEffect(() => {
            axios.get('http://localhost:4000/api/Get_id',{
                  params: {
                    token: localStorage.getItem('token')
                  }})
                  .then(res => {
                    console.log(res.data)
                    setId(res.data);
                  }).catch(err => {
                    console.log(err)
                  })
              })
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }
  return (
    <div className='report-full'>
      <div className='report-text'>
      <div className='report-head'>
        <h3>INITIAL PSYCHOLOGICAL ASSESSMENT REPORT</h3>
    </div>
    <div className='report-file'>
    <div className='report-doc'>
    <Document file={"/reports/"+id+".pdf"} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" width="700" pageNumber={pageNumber} />
    </Document>
    </div>
    <div className='report-page'>
        <div className='first_button'>
        { pageNumber > 1 && <button onClick={changePageBack}><i class="fa-solid fa-chevron-left"></i></button>}
        </div>
        <div className='second_button'>
        <p> Page {pageNumber} of {numPages}</p>
        </div>
       <div className='third_button'>
       {pageNumber < numPages &&<button onClick={changePageNext}><i class="fa-solid fa-chevron-right"></i></button>}
       </div>
    </div>
        
    </div>
    </div>
      </div>
  );
}

export default ReportPage;
