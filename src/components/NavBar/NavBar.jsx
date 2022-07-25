import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className='App-header'>
      {user ?
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resourcesList">Resources</NavLink>
            <NavLink to="addResource">Add Resource</NavLink>
            <NavLink to="/profiles">Profile</NavLink>
            <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
            <NavLink to="/changePassword">Change Password</NavLink>
        </nav>
      :
        <nav>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      }
    </header>
    </>
  )
}

export default NavBar
