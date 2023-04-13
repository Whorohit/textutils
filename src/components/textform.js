
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Textform(prop) {
  
  const uppercase = () => {
    console.log("convert text");
    let newtext = count.toUpperCase();
    setCount(newtext)
    prop.alert("Converted to Uppercase","success")
  }
  const whitespace=()=>{
    let text=count.split(" ").join("")
    setCount(text)
    prop.alert("Remove whitespace ","success")
  }
  const lowercase = () => {
    let lowertext = count.toLowerCase();
    setCount(lowertext)
    prop.alert("Converted to Lowercase","success")
  }
  const entertext = (event) => {
    setCount(event.target.value)
  }
  const [count, setCount] = useState("");
  return (
    <>
      <div id='main' style={{height: '92.5vh',
    backgroundColor:prop.mystyle2==='white'?'white':'#2d2c2c',color:prop.mystyle2==='white'?'black':'white'}}>
      <div className="mb-3 text-center h3 ">
        <label htmlFor="exampleFormControlTextarea1" className="form-label my-4">{prop.line}</label>
        <textarea className="form-control container-sm  border-secondary" id="exampleFormControlTextarea1" rows="3" value={count} onChange={entertext} ></textarea>
        <div id="btnclass" className='text-start m'>
          <button className=' btn btn-primary my-2 mx-2' onClick={uppercase}>Convert to Uppercase</button>
          <button className='btn btn-dark mx-2 my-2' onClick={lowercase}>convert to Lowercase</button>
          <button className='btn btn-dark mx-2 my-2' onClick={whitespace}>Remove white space</button>
          
        </div>
      </div>
      <div id='display' className="container">


      </div>
      <h2 className='text-center textsummary'>Text Summary</h2>
      <div className="container">
        <p id='info'  style={{color:prop.mystyle2==='white'?'black':'white'}} className='h5  h4'>The number of  character is{count.length}</p>
        <p id='info' style={{color:prop.mystyle2==='white'?'black':'white'}} className='h5  h4'>The number of words is {count.length===0?0:count.split(" ").length}</p>
        <p id='info'  style={{color:prop.mystyle2==='white'?'black':'white'}} className='h5   h4'>The to read the text {(1 / 238) * count.split(" ").length} minutes </p>
      </div>
      <h2 id='h' className='textsummary text-center'>Preview</h2>
      <p className=' container'>
        {
          count
        }
      </p>
      </div>
    </>
  )
}
Textform.propTypes = {
  line: PropTypes.string.isRequired
}