import React, { useEffect } from 'react'
import $ from 'jquery'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
export default function Aside() {

    const toggleMenu = () => {
        const aside = document.getElementById("aside");
        aside.classList.toggle('hide');
    }
    useEffect(() => {
        $('.sideMenu').on('click', function () {
            $(this).siblings().children('.subMenuList').slideUp();
            $(this).children('.subMenuList').slideToggle();
        })
    }, [])

    return (
        <>
            <aside id='aside' >
                <div className=" aside-inner d-flex flex-column ">
                    <div className="closeIcon iconButton position-absolute top-0 end-0 mt-2 d-lg-none" onClick={toggleMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                    <nav>
                        <div className='asideLogo text-lg-center d-lg-none  ms-2 ms-lg-0 my-3'>
                            <Logo />
                        </div>
                        <ul className='sideMenuList p-0 mt-lg-4'>
                            <li className='sideMenu' >

                                <Link to='#'>
                                    <i className="fa-solid fa-user menuIcon" /> Admin
                                </Link>
                                <ul className='subMenuList p-0'>
                                    <li className='subMenu'><Link to='/addAdminPage'><i className="fa-solid fa-user-plus subMenuIcon" />Add Admin</Link> </li>
                                    <li className='subMenu'><Link to={'/viewAdminPage'}><i className="fa-solid fa-address-book subMenuIcon" /> Admin List</Link> </li>
                                </ul>
                            </li>
                            <li className='sideMenu' >
                                <Link>
                                    Admin
                                </Link>
                                <ul className='subMenuList p-0'>
                                    <li className='subMenu'><Link>test 1</Link> </li>
                                    <li className='subMenu'><Link>test 2</Link> </li>
                                    <li className='subMenu'><Link>test 3</Link> </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyRight">
                        <p>Copyright © 2024 RADHE </p>
                    </div>
                </div>

            </aside>

        </>
    )
}
