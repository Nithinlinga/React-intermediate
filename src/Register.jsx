import React, { useState } from 'react'

const Register = () => {
    const [formData,setFormData] = useState({firstname:"",lastname:"",email:"",mobile:"",isvisible:true,mode:"online"});
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
        <div className=' border-blue-500'>
          <form className='border-2  border-green-400'>
            <input type="text" className=' block' 
            placeholder='Enter name'
            name='firstname'
            onChange={handleChange}/>
            <input type="text" className=' block'
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
            <br />
            <br />   
            <fieldset >
              <legend>mode:</legend>
              <input type="radio" onChange={handleChange}
            name='mode' id="online" 
            checked={formData.mode==="online"}/>
            <label htmlFor="online">Online mode</label>
            <input type="radio" onChange={handleChange}
            name='mode' id="offline"
            checked={formData==="offline"} />
            <label htmlFor="offline">offline mode</label>
            </fieldset>
            
          </form>
        </div>
        <div className=' '></div>
      </>
    )
}

export default Register