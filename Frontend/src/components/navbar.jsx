import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [show, setShow] = useState(false);
  
  
    const handleLogout = async () => {
        await axios
          .get("http://localhost:3000/server/user/patient/logout", {
            withCredentials: true,
          })
          .then((res) => {
            toast.success(res.data.message);
            setIsAuthenticated(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      };
      
  
    return (
      <nav className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to="/" onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to="/appointment" onClick={() => setShow(!show)}>
              Appointment
            </Link>
            
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <Link to="/login" className="loginBtn btn" onClick={() => setShow(!show)}>
              LOGIN
            </Link>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  

