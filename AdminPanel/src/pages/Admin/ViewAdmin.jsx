import React, { useEffect, useState } from 'react'
import axiosClient from '../../utility/axiosClient';
import { useSelector, useDispatch } from 'react-redux'
import EditAdmin from './EditAdmin';
import { getAllAdmin } from '../../store/dataSlice';
import { APP_URL } from '../../constant/'

export default function ViewAdmin() {
  const adminData = useSelector((state) => state.authReducer.admin);
  let allAdminDataSt = useSelector((state) => state.dataReducer.allAdmin);

  const dispatch = useDispatch();

  const [allAdmin, setAllAdmin] = useState([]);
  const [admin, setAdmin] = useState(adminData);
  const [page, setPage] = useState(1);
  const [maxLimit, setMaxLimit] = useState(0);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    (async () => {
      const response = await axiosClient.get(`${APP_URL.BE_ALL_ADMIN}/${page}/2`);
      setMaxLimit(response.data.maxLimit);
      dispatch(getAllAdmin(response.data.allAdmin));
      setAllAdmin(response.data.allAdmin)
      if (page != maxLimit) {
        $(`#p${maxLimit}`).removeClass('active');
      }
      if (page != 1) {
        $(`#p1`).removeClass('active');
      }
      $(`#p${page}`).addClass('active');
    })()
    
  }, [page])
  
  
  useEffect(() => {
    (async () => {
      try {
        let allAdminData = JSON.parse(JSON.stringify(allAdminDataSt));
        let currentAdminIndex = allAdminData.findIndex((element) => element._id == admin._id);
        if (currentAdminIndex > -1) {
          let currentAdmin = allAdminData.splice(currentAdminIndex, 1);
          allAdminData.unshift(currentAdmin[0]);
        }
        setAllAdmin([])
        setAllAdmin(allAdminData)
      } catch (error) {
        console.log(`CATCH ERROR :: IN :: allAdmin :: get :: API :: 💀💀💀 :: \n ${error} `)
      }
    })()

  }, [allAdminDataSt])  

  const deleteHandler = async (id) => {
    try {
      const response = await axiosClient.delete(`${APP_URL.BE_DELETE_ADMIN}/${id}/${page}/${limit}`)
      setAllAdmin(response.data.allAdmin);
      setMaxLimit(response.data.maxLimit);
    } catch (error) {
      console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
    }

  }
  const activeHandler = async (id) => {
    try {
      const response = await axiosClient.get(`${APP_URL.BE_ACTIVE_ADMIN}/${id}/${page}/${limit}`)
      setAllAdmin(response.data.allAdmin);
    } catch (error) {
      console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
    }

  }

  return (
    <>
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
                {/* {console.log(allAdmin)} */}
                {allAdminDataSt.map((element, index) => (
                  <tr key={index} className={`${element._id == admin._id ? 'active' : ''}`}>
                    <th >{index + 1}</th>
                    <td><div className='d-flex align-items-center'><div className='tableViewImage'><img src={element.profile ? `${import.meta.env.VITE_BASE_URL}${element.profile}` : './image/profile.jpg'} /></div><p className='m-0'>{element.userName}</p></div></td>
                    <td>{element.companyName}</td>
                    <td>{element.email}</td>
                    <td>{element.role}</td>
                    <td>
                      {
                        admin._id != element._id && admin.role == 'admin' ?
                          (<button className='tableViewActionButton active' onClick={(e) => { activeHandler(element._id) }}><i className={element.isActive ? "fa-solid fa-circle-check text-success" : "fa-regular fa-circle-check text-danger"} /></button>) :
                          (<p className='m-0 text-center'> -</p>)
                      }
                    </td>
                    <td >
                      {(admin._id != element._id && admin.role == 'admin' )? (<div className="d-flex">
                        <button className='tableViewActionButton delete' onClick={(e) => { deleteHandler(element._id) }}><i className="fa-solid fa-trash" /></button>
                        <button className='tableViewActionButton edit' data-bs-toggle="modal" data-bs-target={`#editProfile-${index+(page*limit)}`} ><i className="fa-solid fa-user-pen" /></button>
                        <EditAdmin id={`editProfile-${index+(page*limit)}`} admin={element} test={allAdmin} page={page} totalLimit={limit} />
                     
                      </div>) : (
                        <p className='text-center m-0'> - </p>
                      )}
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
        {/* pagination */}
        {maxLimit > 0 &&
          <div className="cuPagination ">
            <ul className=" d-flex align-items-center justify-content-end">
              {/* pre button */}
              {(page > 1 && maxLimit > 4) && <li onClick={(e) => { setPage(page - 1 > 1 ? page - 1 : 1) }} ><i className="fa-solid fa-angles-left " /></li>}
              {/* 1 */}
              <li id={`p${1}`} className='static1' onClick={(e) => { setPage(1) }}>{1}</li>

              {/* first ...  */}
              {(maxLimit > 4 && page > 2) && <li className='first3d'>...</li>}

              {/* n-1 */}
              {(page + 1 == maxLimit && page - 1 != 1) &&
                <li id={`p${page - 1}`} onClick={(e) => { setPage(page - 1) }}>{page - 1}</li>
              }

              {/*current */}
              {(page != maxLimit && page != 1) &&
                <li className='current' id={`p${page}`} onClick={(e) => { setPage(page) }}>{page}</li>
              }

              {/*  current +1 */}
              {((page + 1 != maxLimit && page + 1 < maxLimit) && (page + 1 != maxLimit || page != maxLimit)) &&
                <li className='cp1' id={`p${page + 1}`} onClick={(e) => { setPage(page + 1) }}>{page + 1}</li>
              }



              {/* current+2 */}
              {(maxLimit >= 4 && (page >= 3 || page == 1) && page + 2 != maxLimit && page + 2 < maxLimit) &&
                <li id={`p${page + 2}`} onClick={(e) => { setPage(page + 2) }}>{page + 2}</li>
              }

              {/* last ... */}
              {(maxLimit > 4 && page < maxLimit - 3) && <li>...</li>}
              {(maxLimit > 4 && page < maxLimit - 2 && page == 2) && <li>...</li>}
              {/* n-2,n-1 */}
              {(page == maxLimit && maxLimit > 3) && (
                <>
                  <li id={`p${page - 2}`} onClick={(e) => { setPage(page - 2) }}>{page - 2}</li>
                  <li id={`p${page - 1}`} onClick={(e) => { setPage(page - 1) }}>{page - 1}</li>
                </>
              )}

              {(maxLimit == 3 && page == maxLimit) &&
                <li id={`p${page - 1}`} onClick={(e) => { setPage(page - 1) }}>{page - 1}</li>

              }
              {/* last page  */}
              {(maxLimit > 1) &&
                <li className='max' id={`p${maxLimit}`} onClick={(e) => { setPage(maxLimit) }}>{maxLimit}</li>}

              {/* next button */}
              {(maxLimit > 4 && (page + 2 != maxLimit || page + 1 != maxLimit || page != maxLimit)) &&
                <li onClick={(e) => { setPage(page + 1 < maxLimit ? page + 1 : maxLimit) }} ><i className="fa-solid fa-angles-right " /></li>
              }

            </ul>
          </div>
        }
      </div>
    </>
  )
}
