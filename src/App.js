import Navbar from './components/Navbar'
import Textform from './components/textform'
import './App.css';
import React, {useState } from 'react'
import Alert from './components/alert'
import Home from './components/home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('Dark Mode');
  const [mystyle2, setMystyle2] = useState("white")
  const [mystyle, setMystyle] = useState('black')
  const [alert, setAlert] = useState(null)
  const doalert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 5000);
  const onhandlechange = () => {
    console.log('hello')
    if (mode === 'Dark Mode') {
      setMode('Light Mode')
      setMystyle('#00000087')
      setMystyle2('black')
      doalert("Converted to Dark mode", "success")
    }
    else {
      setMode('Dark Mode')
      setMystyle('black')
      setMystyle2('white')
      doalert("Converted to Light mode", "success")
    }
  }
  return (
    <>
      <Router>
        {<Navbar method="Strings" title="Conversion" Array="Array Function" modes={mode} mystyle={mystyle} mystyle2={mystyle2} togglechange={onhandlechange} />}
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/textform' element={<Textform line="Enter the text for conversion" mystyle={mystyle} mystyle2={mystyle2} alert={doalert} />}>    
          </Route>
          <Route exact path='/' element={<Home mystyle={mystyle} mystyle2={mystyle2} />}>
            
          </Route>
         </Routes> 
      </Router> 
    </>
  );
}

export default App;