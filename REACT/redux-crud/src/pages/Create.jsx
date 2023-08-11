import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createContact } from '../Action/ContactAction';

function Create() {
  const [contact, setContact] = useState({
    first: "",
    last:"",
    profile: "",
    email: "",
    mobile: "",
    address: ""
  })
  const dispatcher = useDispatch()
  const navigate = useNavigate()
  const ReadValue = (e) => {
    const {name, value} = e.target;
    setContact({...contact, [name]:value})
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    try{
      console.log('new Contact = ', contact)
      dispatcher(createContact(contact))
      .unWrap()
      .then(res => {
        toast.success("contact added successfully")
      })
    }
    catch(err){
      toast.error(err)
    }
  }
  return (
    <div className='container p-4'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-black text-warning fs-5">
            <div className="card-header">
              <h2 className='text-warning'>Create New Contact</h2>
              <hr className='bg-warning'/>
            </div>
            <div className="card-body">
              <form autoComplete='off' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="f_name" className='mb-2'>Firstname</label>
                  <input type="text" name='first' className="form-control bg-transparent text-white" id="f_name" placeholder='Enter Firstname' required value={contact.first} onChange={ReadValue} />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="l_name" className='mb-2'>Lastname</label>
                  <input type="text" name='last' className="form-control bg-transparent text-white" id="l_name" placeholder='Enter Lastname' required value={contact.last}  onChange={ReadValue} />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="l_name" className='mb-2'>user Profile</label>
                  <input type="url" name='profile' className="form-control bg-transparent text-white" id="profile" placeholder='example: https://googleimage/image.jpg' required value={contact.profile} onChange={ReadValue}  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="phone" className='mb-2'>Mobile Number</label>
                  <input type="tel" name='mobile' className="form-control bg-transparent text-white" id="phone" placeholder='+00-000-0000-000' required value={contact.mobile} onChange={ReadValue}  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="phone" className='mb-2'>Email</label>
                  <input type="email" name='email' className="form-control bg-transparent text-white" id="email" placeholder='Email Address' required value={contact.email} onChange={ReadValue}  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="l_name" className='mb-2'>Address</label>
                 <textarea name="address" id="address" cols="30" rows="6" placeholder='type Address here...' className='form-control bg-transparent text-white' value={contact.address} onChange={ReadValue}  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn border-0 rounded-2 text-black fs-5 bg-warning w-100 mt-4">Create Contact</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Create
