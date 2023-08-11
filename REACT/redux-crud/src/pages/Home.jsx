import React from 'react'
import { retriveContacts } from '../Action/ContactAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { useEffect } from 'react'
import ContactsItem from './ContactsItem'

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initFetch = useCallback(()=>{
    dispatch(retriveContacts())
  }, [])

  useEffect(()=>{
    initFetch()
  }, [initFetch])

  const contacts = useSelector((item)=>item.contacts)

  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-12 text-">
        <h3 className="display-3 text-succe">Home</h3>
      </div>
    </div>
    <div className="row">
      {
        contacts && contacts.map((item, index) => {
          return (
            <ContactsItem key={index} {...item}/>
          )
        })
      }
    </div>
    </div>
  )
}

export default Home
