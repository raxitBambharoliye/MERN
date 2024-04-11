import React, { useEffect, useState } from 'react'
import axiosClient from '../../utility/axiosClient';
import {useSelector} from 'react-redux'
export default function ViewAdmin() {
    const adminData=useSelector((state)=>state.authReducer.admin)
    const [allAdmin, setAllAdmin] = useState([]);
    const [admin,setAdmin]=useState(adminData);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosClient.get('/allAdmin');
                let allAdminData= response.data.allAdmin;
                console.log('allAdminData', allAdminData)
                let currentAdminIndex= allAdminData.findIndex( (element) => element._id == admin._id);
                console.log('currentAdminIndex', currentAdminIndex)
                if(currentAdminIndex > -1) {
                    let currentAdmin= allAdminData.splice(currentAdminIndex,1);
                    allAdminData.unshift(currentAdmin[0]);
                }
                setAllAdmin(allAdminData)
            } catch (error) {
                console.log(`CATCH ERROR :: IN :: allAdmin :: get :: API :: 💀💀💀 :: \n ${error} `)
            }
        })()

    }, [])
    const deleteHandler =async (id)=>{
        try {
            const response =await axiosClient.delete(`/deleteAdmin/${id}`)
            setAllAdmin(response.data.allAdmin);
        } catch (error) {
            console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
        }
        
    }
    const activeHandler =async (id)=>{
        try {
            const response =await axiosClient.get(`/activeAdmin/${id}`)
            setAllAdmin(response.data.allAdmin);
        } catch (error) {
            console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
        }
        
    }
    return (
        <div className="container">
            <h2 className='pageTitle'>Add Admin</h2>

            <div className=" dataViewTable addDataFrom">
                <div className=" table-responsive">
                    <table className=' table align-middle table-hover'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>UserName</th>
                                <th>CompanyName</th>
                                <th>Email</th>
                                <th>Post</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allAdmin.map((element,index)=>(
                            <tr key={index} className={`${element._id == admin._id ? 'active':''}`}>
                                <th >{index+1}</th>
                                <td><div className='d-flex align-items-center'><div className='tableViewImage'><img src={element.profile ? `${import.meta.env.VITE_BASE_URL}${element.profile}` :'./image/profile.jpg'} /></div><p className='m-0'>{element.userName}</p></div></td>
                                <td>{element.companyName}</td>
                                <td>{element.email}</td>
                                <td>{element.role}</td>
                                <td>
                                {
                                    admin._id != element._id ?
                                    (<button className='tableViewActionButton active' onClick={(e)=>{activeHandler(element._id)}}><i className={element.isActive?"fa-solid fa-circle-check text-success" : "fa-regular fa-circle-check text-danger"} /></button>):
                                    (<p className='m-0 text-center'>-</p>)
                                }
                                </td>
                                <td >
                                {admin._id != element._id ?(  <div className="d-flex">
                                        <button className='tableViewActionButton delete' onClick={(e)=>{deleteHandler(element._id)}}><i className="fa-solid fa-trash" /></button>
                                        <button className='tableViewActionButton edit'><i className="fa-solid fa-user-pen" /></button>
                                    </div>): ( 
                                        <p className='text-center m-0'>-</p>
                                    ) }
                                  

                                </td>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>
                </div>

            </div>


            <>
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog  modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</>





        </div>

    )
}
