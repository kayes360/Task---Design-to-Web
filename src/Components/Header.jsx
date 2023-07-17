import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = ()=>{
    setMobileMenu(!mobileMenu)
  }
  const handleClose = ()=>{
    setMobileMenu(false)
  }
  return (
    <header className="">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a className="active" href="#">
              Featured
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Facilities</a>
          </li>
          <li>
            <a href="#">Find Doctor</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <button>Book Now</button>
        </ul>
      </nav>
      <div className="mobile-menu" onClick={handleMobileMenu}>
        <svg
          fill="#04a6c2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className={`offcanvas-menu ${mobileMenu? "show": "hide"} `}>
        <div className="offcanvas-header" onClick={handleClose}>
          <div className="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a className="active" href="#">
                Featured
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
            <li>
              <a href="#">Find Doctor</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button>Book Now</button>
          </ul>
        </nav>
      </div>
      <div className={`offcanvas-backdrop ${mobileMenu? "show": "hide"} `}></div>
    </header>
  );
}
