import React, { useId, useState } from 'react'

function MultiPreviewImage({
    imageWidth = "150px",
    imageHeight = "150px",
    src = "./image/dummy.jpg",
    alt = "profilePic",
    labelClass,
    ...props
}, ref) {
    const [preImage, setPreImage] = useState([]);
    const [inputValue, setInputValue] = useState([]);
    const Id = useId();
    const [removeImg, setRemoveImg] = useState(false);
    const imageOnChangeHandler = (e) => {
        let imgArray = [];

        if(inputValue && inputValue.length > 0) {
            let imageInput= document.getElementById(Id);
            console.log('inputValue', inputValue)
            const test= {...inputValue, ...e.target.files};
            console.log('test', test)
            setInputValue({...inputValue, ...e.target.files});
            // imageInput.value=inputValue;
            console.log('imageInput :: 2 ', inputValue)

            console.log('change input value check ')
        }else{
            setInputValue(e.target.files)
        }
        for (let image = 0; image < e.target.files.length; image++) {
            imgArray.push(URL.createObjectURL(e.target.files[image]));
        }
            setPreImage(preImage.concat(imgArray));
        }
    const removeImage = (indexToRemove) => {     
        setPreImage((preImage)=>preImage.filter((item, index) => index !== indexToRemove));
        setRemoveImg(true)
    }
    return (
        <div className='position-relative'>
            <div className="d-flex mb-3">   
                {preImage && preImage.length>0 && preImage.map((image,index) => (
                    <div htmlFor={Id} id='previewImgLabel' className={`previewImageLabel ${labelClass} mx-2`} style={{ borderRadius: "8px" }} key={index}>
                        <img src={image} alt={alt} style={{ width: imageWidth, height: imageHeight, }} />
                        <i className="fa-solid fa-pen position-absolute top-50 start-50 translate-middle " />
                        <button type='button' className="removeImgBtn" onClick={(e)=>{removeImage(index)}}><i className="fa-solid fa-xmark" /></button>
                    </div>
                ))}
                <label htmlFor={Id} id='previewImgLabel' className={`previewImageLabel ${labelClass} mx-2`} style={{ borderRadius: "8px" }}>
                    <img src={'./image/dummy.jpg'} alt={alt} style={{ width: imageWidth, height: imageHeight, }} />
                    <i className="fa-solid fa-pen position-absolute top-50 start-50 translate-middle " />
                    <button type='button' className="removeImgBtn" onClick={removeImage}><i className="fa-solid fa-xmark" /></button>
                </label>
            </div>

            <input type="file" multiple id={Id} {...props} ref={ref} onChange={imageOnChangeHandler} />
        </div>
    )
}
export default React.forwardRef(MultiPreviewImage);
/* className='visually-hidden' */