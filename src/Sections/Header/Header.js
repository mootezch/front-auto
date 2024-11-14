import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem from "../../components/Container/NavItem/NavItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark  cyborg-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">

          <NavItem>
      
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/audi">Audi</Link>
        </li>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/mercedess">Mercedes</Link>
        </li>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/bmw1">BMW</Link>
        </li>
      </ul>
      <style jsx>{`
        a:active {
          color: blue;
        }
      `}</style>
    
    </NavItem>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
