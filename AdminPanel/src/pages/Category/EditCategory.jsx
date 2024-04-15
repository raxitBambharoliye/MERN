import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../../components/form'
import { useForm } from 'react-hook-form';
import PreviewImage from '../../components/PreviewImage/PreviewImage';
import Button from '../../components/Button/Button';
import axiosClient from '../../utility/axiosClient';
import { useSelector, useDispatch } from 'react-redux'
import { setViewData, setEditData} from '../../store/dataSlice';
import { APP_URL } from '../../constant/'
import AddDataInput from '../../components/AddDataInput/AddDataInput'
export default function EditCategory({
    id,
    page, totalLimit
}) {
    const editData = useSelector((state) => state.dataReducer.editData);
    const editorAdmin = useSelector((state) => state.authReducer.admin)

    const [admin, setAdmin] = useState(editData);
    const dispatch = useDispatch();
    const buttonRef = useRef();


    const { register, reset, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {

        }
    });

    useEffect(() => {
        // setAdmin(editData);
        if (editData.categoryImage) {

            $('#previewImgLabel img').attr('src', `${import.meta.env.VITE_BASE_URL}${editData.categoryImage}`)
        } else {
            $('#previewImgLabel img').attr('src', `./image/dummy.jpg`)
        }
        reset({
            categoryName: editData.categoryName || '',
            categoryImage: `${import.meta.env.VITE_BASE_URL}${editData.categoryImage}` || './image/dummy.jpg'
        })
    }, [editData])

    const editAdminSub = async (data) => {

        try {
            const formData = new FormData();
            if (data.categoryImage[0]) {
                formData.append('categoryImage', data.categoryImage[0])
            }
            formData.append("categoryName", data.categoryName)
            formData.append("page", page)
            formData.append("limit", totalLimit)
            formData.append("editor", editorAdmin._id);
            const response = await axiosClient.post(`${APP_URL.BE_EDIT_ADMIN_PROFILE}`, formData);
            dispatch(setViewData(response.data.allAdmin))
            buttonRef.current.click();
            dispatch(setEditData({}))
        } catch (error) {
            console.log(`CATCH ERROR :: IN :: editAdminSub :: submitHandler :: API :: 💀💀💀 :: \n ${error} `)
        }
    }
    const inputRef = useRef();



    return (
        <div
            className="modal fade"
            id={id}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-backdrop="static"
        >
            <div className="modal-dialog  modal-dialog-centered modal-lg">
                <form className="modal-content" onSubmit={handleSubmit(editAdminSub)}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Edit Category
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="card-body px-4">
                            <PreviewImage src={editData.categoryImage} labelClass='mb-4' {...register("categoryImage", {
                                required: "category image is required "
                            })} />
                            {errors.categoryImage && <p className='validationError text-left'>{errors.categoryImage.message}</p>}

                            <AddDataInput type="text" label={"Category Name : "} placeholder='Enter category name ... ' ref={inputRef} inputClass='themInput'{...register("categoryName", {
                                required: "company name is required"
                            })} />
                            {errors.categoryName && <p className='validationError text-center'>{errors.categoryName.message}</p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" buttonClass="themButtonBorder me-2 " data-bs-dismiss="modal" ref={buttonRef} >Discard</Button>
                        <Button type="submit" buttonClass="themButtonFill ">Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
