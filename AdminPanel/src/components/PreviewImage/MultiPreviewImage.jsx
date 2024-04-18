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
    console.log('preImage', preImage)
    console.log(preImage)
    const Id = useId();
    const [removeImg, setRemoveImg] = useState(false);
    const imageOnChangeHandler = (e) => {
        let imgArray = [];
        for (let image = 0; image < e.target.files.length; image++) {
            console.log('image', image)
            console.log('element', e.target.files[image])
            imgArray.push(URL.createObjectURL(e.target.files[image]));
        }

        console.log('imgArray', imgArray)
   
            setPreImage(preImage.concat(imgArray));
     
        console.log('preImage ::: ', preImage)
    }
    const removeImage = (index) => {
        console.log('index', index)
       
        console.log('preImage', preImage)
        
        // document.getElementById(Id).value = '';
        setPreImage( preImage.slice(index, 1));
        setRemoveImg(true)
    }
    return (
        <div className='position-relative'>
            <div className="d-flex mb-3">   
                {preImage.length>0 && preImage.map((image,index) => (
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