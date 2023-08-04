import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pnf(props) {
  const navigation = useNavigate()
  return (
    <div className='pnf container-fluid d-flex justify-content-center align-items-center'>
        <div className='pnf-card'>
            <i class="bi bi-cloud-moon-fill"></i>
            <h1>404 Error</h1>
            <button type='button' onClick={()=>{navigation('/')}} className='border-0 p-2 px-3 fs-5 rounded-5 bg-danger text-white'>Back to Home</button>
        </div>

    </div>
  )
}

export default Pnf
