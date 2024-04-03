import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axiosClient from '../../utility/api/axiosClient';

function Profile() {

    const auth = useSelector((state) => state);
    const time = getTime();
    const { register, handleSubmit } = useForm();
    const testSubmit = (data) => {
        console.log(data.test[0])
        axiosClient.post('/user/uploadImage',data.test[0])
    }
    return (
        <>
        <section className='ProfileView'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="profileLeft d-flex flex-column align-items-center justify-content-around">
                            <img src="./image/profile.jpg" className='profilePic' alt="" />
                            <h3 className='mt-2'>{auth.userData.userName}</h3>
                            <ul className='profileDataList w-100'>
                                <li title={auth.userData.email}>Email : {truncateString(auth.userData.email, 15)}</li>
                                <li>UserId : 89354796355823</li>
                                <li>Phone Number : {"9869399846651"}</li>
                            </ul>
                            <ul className="profileMenu w-100">
                                <li className="profileLinks"><Link className=" d-block  mt-1" >Edit Profile</Link></li>
                                <li className="profileLinks"><Link className=" d-block  mt-1" >Your Order</Link></li>
                                <li className="profileLinks"><Link className=" d-block  mt-1" >Sign Out </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="profileRight">
                            <h2 className='profileTitle'>{time} {auth.userData.userName}</h2>
                            <div className="addresses">
                                <div className="addressesTitle">
                                    <h3>Your Addresses</h3>
                                </div>
                                <div className="addressesInner mt-2 ">
                                    <div className="row gx-2 spanRow">
                                        <div className="col-6 spanItem">
                                            <div className="addressesItem active">
                                                <h4>raxit  patel</h4>
                                                <h5>surat, gujarat, india</h5>
                                                <p>142, dharma raj park so.,simada gam , nana vara ...</p>
                                            </div>
                                        </div>
                                        <div className="col-6 spanItem">
                                            <div className="addressesItem">
                                                <h4>raxit  patel</h4>
                                                <h5>surat, gujarat, india</h5>
                                                <p>142, dharma raj park so.,simada gam , nana vara ...</p>
                                            </div>
                                        </div>
                                        <div className="col-6 spanItem">
                                            <div className="addressesItem">
                                                <h4>raxit  patel</h4>
                                                <h5>surat, gujarat, india</h5>
                                                <p>142, dharma raj park so.,simada gam , nana var...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="products">
                                <div className="addressesTitle">
                                    <h3>Cart Products</h3>
                                </div>
                                <div className="productsInner mt-2 ">
                                    <div className="row gx-2 spanRow">
                                        <div className="col-3 spanItem">
                                            <div className="profileProductItem">
                                                <img src="image/collection1.jpg" alt="leamp1" />
                                                <div className="text">
                                                    <h5>className</h5>
                                                    <p>$44.40</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 spanItem">
                                            <div className="profileProductItem">
                                                <img src="image/collection1.jpg" alt="leamp1" />
                                                <div className="text">
                                                    <h5>className</h5>
                                                    <p>$44.40</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 spanItem">
                                            <div className="profileProductItem">
                                                <img src="image/collection1.jpg" alt="leamp1" />
                                                <div className="text">
                                                    <h5>className</h5>
                                                    <p>$44.40</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 spanItem">
                                            <div className="profileProductItem">
                                                <img src="image/collection1.jpg" alt="leamp1" />
                                                <div className="text">
                                                    <h5>className</h5>
                                                    <p>$44.40</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 spanItem">
                                            <div className="profileProductItem">
                                                <img src="image/collection1.jpg" alt="leamp1" />
                                                <div className="text">
                                                    <h5>className</h5>
                                                    <p>$44.40</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <form action="" onSubmit={handleSubmit(testSubmit)}>
                <Input type='file' {...register("test")} />
                <Button type='submit'>Upload file </Button>
        </form>
        </>
    )
}

function truncateString(text, maxLength) {
    return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}
function getTime() {
    let date = new Date()   
    if (date.getHours() < 12) {
        return "Good Morning!"
    } else if (date.getHours() >= 12 && date.getHours() < 15) {
        return "Good Afternoon!"
    } else if (date.getHours() >= 15 && date.getHours() < 19) {
        return "Good Afternoon!"
    } else {
        return "Good Night!"
    }
}
export default Profile
