import { useState } from 'react'
import './App.css'

function App() {
  const [formData,setFormData] = useState({firstname:"",lastname:"",email:"",mobile:"",isvisible:true});
  console.log(formData );
  function handleChange(event){
    const {name, value,checked,type}=event.target;
    console.log(event.target.value);
    setFormData(prevData=>{
      return {
        ...prevData,
        [name]:type=="checkbox"?checked:value
      }
    });
  }
  return (
    <>
      <div className='bor'>
        <form className='border-2 border-green-400'>
          <input type="text" className='block' 
          placeholder='Enter name'
          name='firstname'
          onChange={handleChange}/>
          <input type="text" className='block'
          placeholder='Enter lastname'
          name='lastname'
          onChange={handleChange}/>
          <input type="text" className=' block'
          placeholder='Enter email'
          name='email'
          onChange={handleChange}/>
          <input type="text" className='block' 
          placeholder='Enter mobile'
          name='mobile'
          onChange={handleChange}/>
          <input type="checkbox"
          name='isvisible' 
          id='isvisible'
          onChange={handleChange}
          checked={formData.isvisible} />
          <label htmlFor="isvisible">Am I visible</label>
        </form>
      </div>
      <div className=' '></div>
    </>
  )
}

export default App
