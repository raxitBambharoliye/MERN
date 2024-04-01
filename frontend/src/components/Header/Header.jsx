import { Link, NavLink } from 'react-router-dom'
import '../../assets/css/style.css'
function Header() {
  const Menu = [{ title: "home", path: "/" },{ title: "products", path: "/products" },{ title: "Sale", path: "/sale" },{ title: "About", path: "/about" },{ title: "concat", path: "/contact" },]
    return (
        <header>
        <div className="container">
          <div className="d-flex justify-content-between align-center">
            {/* logo */}
            <Link to="/" className="logo">
              light store
            </Link>
            {/* menu */}
            <nav>
              <ul className="d-flex align-center m-0 ">
                { Menu.map((element,index) => (
                <li key={index}>
                <NavLink to={element.path}>{element.title}</NavLink>
              </li>
              ))}
              </ul>
            </nav>
            <ul className="d-flex header-icon">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-magnifying-glass" />
                </Link>
              </li>
              <li>
                <Link to="/">
                    <i className="fa-solid fa-user" />
                </Link>
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
    )
}
export default Header