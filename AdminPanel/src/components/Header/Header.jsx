import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import '../../assets/css/style.css'
import '../../assets/css/header.css'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { getAdmin, logOutHandler } from '../../common'
import {useSelector} from 'react-redux'
export default function Header() {
  const testAdmin= useSelector((state)=>state.authReducer.admin);
  console.log('testAdmin', testAdmin)
  const adminData= getAdmin();
  const [admin, setAdminData]=useState(adminData);


  const toggleMenu = () => {
    const aside = document.getElementById("aside");
    aside.classList.toggle('hide');
  }
  useEffect(() => {
    $("#userProfile").on('click', function () {
      $(this).children('.userProfileDropDown').slideToggle();
    })
  })

  return (
    <header >
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <div className="toggleButton iconButton " onClick={toggleMenu}>
            <i className="fa-solid fa-bars" />
          </div>
          <Logo />
        </div>
        <div className="userProfile position-relative" id='userProfile'>
          <div className="d-flex align-items-center">
            <div className="profileImage me-3">
              <img src="./image/userPro.png" alt="" />
            </div>
            <h3 className='username m-0 d-none d-lg-block'>{admin.userName}</h3>
          </div>

          <div className="userProfileDropDown ">
            <ul>
              <li><Link>Setting</Link> </li>
              <li><Link>Profile</Link> </li>
              <li><Link onClick={logOutHandler} >LogOut</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
