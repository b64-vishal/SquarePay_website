import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from 'react-bootstrap';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout} =useAuth0();
  const { user, isAuthenticated} = useAuth0();


  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              SquarePay
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  {
                    isAuthenticated && <p>
                      {user.name}
                    </p>
                  }
                </li>
                {
                   isAuthenticated ? <li>
                    <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
               </Button>
                   </li>
                   :
                   <li>
                   <Button onClick={() => loginWithRedirect()}>Log In</Button>
                   </li>
  
                }
                
              </ul>
              
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
