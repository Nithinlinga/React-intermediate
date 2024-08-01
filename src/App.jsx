import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData,setFormData] = useState({firstname:"",lastname:"",email:"",mobile:""})
  function handleChange(event){
    console.log(event.target.value);
    setFormData(prevData=>{
      return {
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
  }
  return (
    <>
      <div className='bor'>
        <form className='border-2 border-green-400'>
          <input type="text" className='block' 
          placeholder='Enter name'
          name='firstname'
          onAbort={handleChange}/>
          <input type="text" className='block'
          placeholder='Enter lastname'
          name='lastname'
          onAbort={handleChange}/>
          <input type="text" className=''
          placeholder='Enter email'
          name='email'
          onAbort={handleChange}/>
          <input type="text" className='block' 
          placeholder='Enter mobile'
          name='mobile'
          onAbort={handleChange}/>
        </form>
      </div>
      <div className=' '></div>
    </>
  )
}

export default App
