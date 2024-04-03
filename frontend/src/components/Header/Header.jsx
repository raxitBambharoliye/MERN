import { Link, NavLink } from 'react-router-dom'
import '../../assets/css/style.css'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'
import { logOut } from '../../store/auth.slice';
import {useDispatch} from 'react-redux'
function Header() {
  const auth = useSelector((state) => state);
  const Menu = [{ title: "home", path: "/" }, { title: "products", path: "/products" }, { title: "Sale", path: "/sale" }, { title: "About", path: "/about" }, { title: "concat", path: "/contact" },]
  const dispatch= useDispatch();
  const logOutHandler=()=>{
    dispatch(logOut());

  }

  return (
    <>
      <header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* logo */}
            <Link to="/" className="logo">
              light store
            </Link>
            {/* menu */}
            <nav>
              <ul className="d-flex align-center m-0 ">
                {Menu.map((element, index) => (
                  <li key={index}>
                    <NavLink to={element.path}>{element.title}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="d-flex header-icon m-0">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-magnifying-glass" />
                </Link>
              </li>
              <li>
                {auth.isAuth ? (
                  <div className="dropdown">
                    <div className="profileButton btn-secondary dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="./image/profile.jpg" className='headerProfile me-2' alt="userProfile" />
                      <p className='m-0'>{auth.userData.userName}</p>
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" onClick={logOutHandler} >
                          < i className="fa-solid fa-right-from-bracket m-0 me-2" /> Logo Out
                        </button>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                        <i className="fa-solid fa-user-pen m-0 me-2"/>
                          Edit Profile
                        </Link>
                      </li>
                    </ul>
                  </div>) : (<Link to="/" data-bs-toggle="modal" data-bs-target="#login">
                    <i className="fa-solid fa-user" />
                  </Link>)}

              </li>
              <li>
                <Link to="/">
                  {" "}
                  <i className="fa-solid fa-cart-shopping" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Login />
    </>

  )
}
export default Header