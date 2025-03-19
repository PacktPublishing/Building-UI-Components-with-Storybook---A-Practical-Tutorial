import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import { useState } from 'react';
import './pages.css'

const PasswordWrapper = () => {
  const [password, setPassword] = useState('')
  const [unlock, setUnlock] = useState(false)

  const handleChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }

  const handleClick = () => {
    if(password === 'delicious-coffee') {
      setUnlock(true)
    } else {
      setUnlock(false)
    }
    setPassword('')
  }

  return (
    <div className='App-header'>
      <br/>
      <div style={{padding:'0px'}}>
      <input
      value={password}
      placeholder='enter the password...'
      type='text'
      onChange={handleChange}
      />
      <button
      onClick={handleClick}
      style={{margin:'2px'}}>Enter</button>
      </div>
         { unlock ? <Contact /> : <Homepage /> }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
