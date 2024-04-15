import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../utility/axiosClient';
import { useSelector, useDispatch } from 'react-redux'
import EditAdmin from './EditAdmin';
import { getAllAdmin, setEditAdmin } from '../../store/dataSlice';
import { APP_URL } from '../../constant/'
import Active from '../../components/Active/Active';
import Delete from '../../components/Delete/Delete';
import Search from '../../components/Search/Search';

export default function ViewAdmin() {
  const adminData = useSelector((state) => state.authReducer.admin);
  let allAdminDataSt = useSelector((state) => state.dataReducer.allAdmin);

  const dispatch = useDispatch();

  const [allAdmin, setAllAdmin] = useState([]);
  const [admin, setAdmin] = useState(adminData);
  const [page, setPage] = useState(1);
  const [maxLimit, setMaxLimit] = useState();
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState(" ");


  const activeCloseRef= useRef();
  const deleteCloseRef= useRef();
  useEffect(() => {
    (async () => {

      const response = await axiosClient.get(`${APP_URL.BE_ALL_ADMIN}/${page}/${limit}/?search=${search}`);
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

  }, [page, limit,search])


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
      deleteCloseRef.current.click();

    } catch (error) {
      console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
    }

  }
  const activeHandler = async (id) => {
    try {
      const response = await axiosClient.get(`${APP_URL.BE_ACTIVE_ADMIN}/${id}/${page}/${limit}`)
      setAllAdmin(response.data.allAdmin);
      activeCloseRef.current.click();
    } catch (error) {
      console.log(`CATCH ERROR :: IN :: deleteAdmin :: delete :: API :: 💀💀💀 :: \n ${error} `)
    }

  }
  const searchHandler= (e)=>{
    
  }

  return (
    <>
      <div className="container">
        <h2 className='pageTitle'>Add Admin</h2>
        <Search placeholder='Search Admin here ...'
        onChange={(e)=>{setSearch(e.target.value)}}
        />
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
                {allAdmin.map((element, index) => (
                  <tr key={index} className={`${element._id == admin._id ? 'active' : ''}`}>
                    <th >{index + 1}</th>
                    <td><div className='d-flex align-items-center'><div className='tableViewImage'><img src={element.profile ? `${import.meta.env.VITE_BASE_URL}${element.profile}` : './image/profile.jpg'} /></div><p className='m-0'>{element.userName}</p></div></td>
                    <td>{element.companyName}</td>
                    <td>{element.email}</td>
                    <td>{element.role}</td>
                    <td>
                      {
                        admin._id != element._id && admin.role == 'admin' ?
                          (<button className='tableViewActionButton active'  data-bs-toggle="modal" data-bs-target="#activeModal" onClick={(e) => { dispatch(setEditAdmin(element)) }} ><i className={element.isActive ? "fa-solid fa-circle-check text-success" : "fa-regular fa-circle-check text-danger"} /></button>) :
                          (<p className='m-0 text-center'> -</p>)
                      }
                    </td>
                    <td >
                      {(admin._id != element._id && admin.role == 'admin') ? (<div className="d-flex">
                        <button className='tableViewActionButton delete' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={(e) => { dispatch(setEditAdmin(element)) }}><i className="fa-solid fa-trash" /></button>
                        <button className='tableViewActionButton edit' data-bs-toggle="modal" data-bs-target="#editAdmin" onClick={(e) => { dispatch(setEditAdmin(element)) }} ><i className="fa-solid fa-user-pen" /></button>

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

        <div className="cuPagination d-flex justify-content-between">
          <div className="limit">
            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
              value={limit}
              onChange={(e) => { setLimit(parseInt(e.target.value)) }}
            >
              <option  value={10}>10</option>
              <option  value={20}>20  </option>
              <option  value={50}>50</option>
              <option   value={100}>100</option>
            </select>
          </div>
          {maxLimit > 0 &&
            <ul className=" d-flex align-items-center justify-content-end">
              {/* pre button */}
              {(page > 1 && maxLimit > 4) && <li onClick={(e) => { setPage(page - 1 > 1 ? page - 1 : 1) }} ><i className="fa-solid fa-angles-left " /></li>}
              {/* 1 */}
              <li id={`p${1}`} className='static1' onClick={(e) => { setPage(1) }}>{1}</li>

              {/* first ...  */}
              {(maxLimit > 4 && page > 2) && <li className='first3d'>...</li>}

              {/* n-1 */}
              {(page + 1 == maxLimit && page - 1 != 1 && page - 1 > 0) &&
                <li className='n-1' id={`p${page - 1}`} onClick={(e) => { setPage(page - 1) }}>{page - 1}</li>
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
          }
        </div>
        <EditAdmin id="editAdmin" page={page} totalLimit={limit} />
        <Active type={'admin'} onClickHandler={activeHandler} closeBtnRef={activeCloseRef}/>
        <Delete type={'admin'} onClickHandler={deleteHandler} closeBtnRef={deleteCloseRef}/>
      </div>

    </>
  )
}
