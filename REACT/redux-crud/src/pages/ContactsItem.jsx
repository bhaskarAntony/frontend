import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { deleteContact } from '../Action/ContactAction';
import { useDispatch } from 'react-redux';
import '../styles/item.css'


function ContactsItem(props) {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const deleteHandler= async (id)=>{
        if(window.confirm(`are you sure want to delete contact id ${id}`)){
            await dispatcher(deleteContact({id:id}))
            .unwrap()
            .then(res=>{
             toast.success("contact deleted successfully")
             navigate('/')
                
            }).catch(err=>toast.error(err.message));
        }
        else{
            toast.warning("delete terminated")
        }
    }
  return (
    <div className='col-md-4 mt-2'>
        <div className="card bg-black" style={{"background":`url(${props.profile}) no-repeat center`}}>
           <div className="blur">
          <div className="img text-center">
          <img src={props.profile ? props.profile: "#"} alt="no image" className='text-center' />
          </div>
            <div className="card-header text-center">
                <h4 className=" text-black">{props.first }{props.last}</h4>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item bg-transparent">
                        <strong className="text-black" >Email: </strong>
                        <span className="float-end text-black">{props.email}</span>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <strong className="text-black ">Mobile: </strong>
                        <span className="float-end text-black">{props.mobile}</span>
                    </li>
                    <li className="list-group-item bg-transparent">
                       <details className='text-black'>
                       <summery className="text-black">Address :</summery>
                       <p className="text-black">{props.address}</p>
                       </details>
                        
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/edit/${props.id}`} className="btn btn-info"><i className='bi bi-pencil'></i></NavLink>
                <button className='btn btn-danger float-end' onClick={()=> deleteHandler(props.id)}><i className='bi bi-trash'></i></button>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default ContactsItem
