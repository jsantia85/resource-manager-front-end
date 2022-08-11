import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <NavLink to="/" className={styles.liChild}><img src="/favicon.ico" alt="File icon" className={styles.homeBtn}/>Resource Manager</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {user ? 
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <NavLink to="/resourcesList" className={styles.liChild}>All Resources</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/searchResources" className={styles.liChild}>Search Resources</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="addResource" className={styles.liChild}>Add Resource</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/profiles" className={styles.liChild}>Profile</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="" onClick={handleLogout} className={styles.liChild}>Log Out</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/changePassword" className={styles.liChild}>Change Password</NavLink>
                    </li>
                  </ul>
                : 
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <NavLink to="/login" className={styles.liChild}>Log In</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/signup" className={styles.liChild}>Sign Up</NavLink>
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
