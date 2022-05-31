import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import SupervisorAccountTwoTone from "@mui/icons-material/SupervisorAccountTwoTone";
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to=""></Link>
        <div className="nav-links">
          <Link className="nav-link" to="" >
            <div className="nav-link-container">
              <SupervisorAccountTwoTone className="nav-icon"/>
              <span>Log in</span>
            </div>  
          </Link>
          <Link className="nav-link" to="" >
            <div className="nav-link-container">
              <ManageAccountsTwoToneIcon className="nav-icon"/>
              <span>Sign up</span>
            </div>  
          </Link>
          
          <button className="button">List your Property</button>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar;
