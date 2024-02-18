import { Link, useMatch, useResolvedPath } from "react-router-dom"
import cart_icon from './components/Assets/cart-icon.png'
import { useContext } from "react"
import { ShopContext } from "./Context/ShopContext"

export default function Navbar() {

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className="nav">
      <ul>
      <Link to="/" className="site-title">
        Site Name
      </Link>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      <ul>
        {localStorage.getItem("auth-token")
        ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
        :<CustomLink to="/login"><button>Login</button></CustomLink>}
        
        <CustomLink to="/cart"><img src={cart_icon} alt=""/></CustomLink>
        <p>{getTotalCartItems()}</p>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}