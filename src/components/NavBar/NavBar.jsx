import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <NavLink to="/">Home</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {user ? 
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <NavLink to="/resourcesList">All Resources</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/searchResources">Search Resources</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="addResource">Add Resource</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/profiles">Profile</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/changePassword">Change Password</NavLink>
                    </li>
                  </ul>
                : 
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                  </ul>
                }
            </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
