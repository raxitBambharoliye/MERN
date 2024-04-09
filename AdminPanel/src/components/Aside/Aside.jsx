import React, { useEffect } from 'react'
import $ from 'jquery'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
export default function Aside() {

    const toggleMenu = () => {
        const aside = document.getElementById("aside");
        //   console.log('aside', aside)
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
            <aside id='aside  '   >
                <div className="closeIcon iconButton position-absolute top-0 end-0 mt-2" onClick={toggleMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <nav>
                    <div className='asideLogo text-lg-center d-lg-none  ms-2 ms-lg-0 my-3'>
                        <Logo />
                    </div>
                    <ul className='sideMenuList p-0 mt-lg-4'>
                        <li className='sideMenu' >
                        
                            <Link>
                                Admin
                            </Link>
                            <ul className='subMenuList '>
                                <li className='subMenu'>test 1 </li>
                                <li className='subMenu'>test 2 </li>
                                <li className='subMenu'>test 3 </li>
                            </ul>
                        </li>
                        <li className='sideMenu'>
                            test
                            <ul className='subMenuList '>
                                <li className='subMenu'>test 1 </li>
                                <li className='subMenu'>test 2 </li>
                                <li className='subMenu'>test 3 </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>

        </>
    )
}
