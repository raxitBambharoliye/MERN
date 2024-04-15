import React, { useId, useState } from 'react'

function PreviewImage({
  imageWidth = "150px",
  imageHeight = "150px",
  src = "./image/dummy.jpg",
  alt = "profilePic",
  labelClass,
  ...props
}, ref) {
  const [preImage, setPreImage] = useState(src);
  console.log('preImage', preImage)
  console.log(preImage)
  const Id = useId();
  const [removeImg, setRemoveImg] = useState(false);
  const imageOnChangeHandler = (e) => {
    console.log(e.target.value)
    setPreImage(URL.createObjectURL(e.target.files[0]));
  }
  const removeImage = () => {
     document.getElementById(Id).value='';
    setPreImage('./image/profile.jpg');
    setRemoveImg(true)
  }
  return (
    <div className='position-relative'>
      <label htmlFor={Id} id='previewImgLabel' className={`previewImageLabel ${labelClass}`} style={{ borderRadius: "8px" }}>
        <img src={preImage} alt={alt} style={{ width: imageWidth, height: imageHeight, }} />
        <i className="fa-solid fa-pen position-absolute top-50 start-50 translate-middle " />
        <button type='button' className="removeImgBtn" onClick={removeImage}><i className="fa-solid fa-xmark" /></button>
      </label>
      <input type="file" className='visually-hidden' id={Id} {...props} ref={ref} onChange={imageOnChangeHandler} />
    </div>
  )
}
export default React.forwardRef(PreviewImage);