import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Aside from '../Aside/Aside'
import '../.../../../assets/css/media.css'
export default function Root() {
  return (
    <>

      <div className="row px-lg-5 px-2">
        <div className="aside col-lg-2">
          <Aside></Aside>
        </div>
        <div className="  col-lg-2 ">
        </div>
        <div className=" col-lg-9">
          <Header />
          <main>
          <Outlet></Outlet>
          </main>
        </div>
      </div>

    </>
  )
}
