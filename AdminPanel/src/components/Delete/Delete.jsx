import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import '../../assets/css/style.css'
function Delete({
    type,
    closeBtnRef,
    onClickHandler,
}) {
    const dataSt= useSelector((state)=> state.dataReducer.editData);

    const [activeData,setActiveData]=useState(dataSt);
    useEffect(()=>{
        setActiveData(dataSt);
    }, [dataSt])
    let titleData;
    switch (type) {
        case 'admin':
            titleData = activeData.userName
            break;
        case 'category':
            titleData = activeData.categoryName;
            break;
    }
    return (
        <>

            <div
                className="modal fade"
                id="deleteModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-body ">
                            <p className='text-center  mt-3 activeModalTitle'>are you Sure to Delete <span>{titleData}</span> </p>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                        <Button type="button" buttonClass="themButtonBorder me-2 " data-bs-dismiss="modal" ref={closeBtnRef}  >Discard</Button>
                        <Button type="submit" buttonClass="themButtonFill " onClick={(e)=>{onClickHandler(activeData._id)}} >Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Delete
