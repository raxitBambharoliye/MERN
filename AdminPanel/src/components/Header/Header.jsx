import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import '../../assets/css/style.css'
import '../../assets/css/header.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/themSlice';
export default function Header() {
  const dispatch = useDispatch();
  let them = useSelector((state) => state);
  const [showMenu, setShowMenu] = useState(them.showMenu);

  useEffect(() => {
    if (window.innerWidth < 992) {
      dispatch(toggleMenu(false))
      setShowMenu(false);
    } else {
      dispatch(toggleMenu(true))
      setShowMenu(true);
    }
  }, [window.innerWidth])

  return (
    <header >
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          {!showMenu && (
            <div className="toggleButton iconButton " onClick={(e) => { dispatch(toggleMenu(!showMenu)) }}>
              <i className="fa-solid fa-bars" />
            </div>)}
          <Logo />
        </div>
        <div className="userProfile d-flex  align-items-center">
          <div className="profileImage me-3">
            <img src="./image/userPro.png" alt="" />
          </div>
          <h3 className='username m-0 d-none d-lg-block'>Raxit Patel</h3>
        </div>
      </div>
    </header>
  )
}
