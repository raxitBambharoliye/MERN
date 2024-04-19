import React, { useEffect, useId, useState } from 'react'

function MultiPreviewImage({
    imageWidth = "150px",
    imageHeight = "150px",
    src = "./image/dummy.jpg",
    alt = "profilePic",
    labelClass,
    images=[],
    ...props
}, ref) {
    const [preImage, setPreImage] = useState(images);
    console.log('preImage', preImage)
    const [inputValue, setInputValue] = useState([]);
    const Id = useId();
    const [removeImg, setRemoveImg] = useState(false);
    // if (images && images.length > 0) {
    //     setPreImage(images)
    // }
    const imageOnChangeHandler = (e) => {

        let newFile = Array.from(e.target.files);
        setInputValue(inputValue.concat(newFile));
        let imgArray = [];
        for (let image = 0; image < e.target.files.length; image++) {
            imgArray.push(URL.createObjectURL(e.target.files[image]));
        }
        setPreImage(preImage.concat(imgArray));
    }
    useEffect(() => {
        let filesArray = [];
        inputValue.forEach(function (fileData) {
            var blob = new Blob([fileData], { type: fileData.type });
            var file = new File([blob], fileData.name, { lastModified: fileData.lastModified });
            filesArray.push(file);
        });
        var filesList = new DataTransfer();
        filesArray.forEach(function (file) {
            filesList.items.add(file);
        });
        var inputElement = document.getElementById(Id);
        inputElement.files = filesList.files;
    }, [inputValue])

    const removeImage = (indexToRemove) => {
        setPreImage((preImage) => preImage.filter((item, index) => index !== indexToRemove));
        setInputValue((preInput)=>preInput.filter((item, index) => index !== indexToRemove))
        setRemoveImg(true)
    }
    return (
        <div className='position-relative'>
            <div className="d-flex mb-3">
                {console.log('preImage :: ', preImage)}
                {preImage && preImage.length > 0 && preImage.map((image, index) => (
                    <div htmlFor={Id} id='previewImgLabel' className={`previewImageLabel ${labelClass} mx-2`} style={{ borderRadius: "8px" }} key={index}>
                        <img src={image} alt={alt} style={{ width: imageWidth, height: imageHeight, }} />
                        <i className="fa-solid fa-pen position-absolute top-50 start-50 translate-middle " />
                        <button type='button' className="removeImgBtn" onClick={(e) => { removeImage(index) }}><i className="fa-solid fa-xmark" /></button>
                    </div>
                ))}
                <label htmlFor={Id} id='previewImgLabel' className={`previewImageLabel ${labelClass} mx-2`} style={{ borderRadius: "8px" }}>
                    <img src={'./image/dummy.jpg'} alt={alt} style={{ width: imageWidth, height: imageHeight, }} />
                    <i className="fa-solid fa-pen position-absolute top-50 start-50 translate-middle " />
                    <button type='button' className="removeImgBtn" onClick={removeImage}><i className="fa-solid fa-xmark" /></button>
                </label>
            </div>

            <input type="file" multiple id={Id} className='visually-hidden' {...props} ref={ref} onChange={imageOnChangeHandler} />
        </div>
    )
}
export default React.forwardRef(MultiPreviewImage);
/*  */


/* 

{
    0: File {name:'model-3.jpg', lastmodified: 1711944167147,},
    1: File {name:'model-4.jpg', lastmodified: 1711944167146,},
    2: File {name:'model-5.jpg', lastmodified: 1711944167148,},
}

{
    0: File {name:'model-3.jpg', lastmodified: 17119441671422,},
   1: File {name:'model-3.jpg', lastmodified: 17119441671422,},
}
    {
        0: File {name:'model-3.jpg', lastmodified: 1711944167147,} ,
        1: File {name:'model-4.jpg', lastmodified: 1711944167146,} ,
        2: File {name:'model-5.jpg', lastmodified: 1711944167148,} ,              
        3: File {name:'model-3.jpg', lastmodified: 17119441671422,},

    }
*/