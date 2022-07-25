import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as resourceService from './services/resourceService.js'
import AddResource from './pages/AddResource/AddResource'
import ResourcesList from './pages/ResourcesList/ResourcesList'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [resources, SetResources] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddResource = async (newResourceData) => {
    const newResource = await resourceService.create(newResourceData)
    SetResources([...resources, newResource])
    navigate('/resourcesList')
  }

  useEffect(() => {
    const fetchResources = async () => {
      const resourceData = await resourceService.getAll()
      SetResources(resourceData)
    }
    fetchResources()
  }, [])

  return (
    <>
    <div className='App'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
          path="/addResource"
          element={
            <AddResource handleAddResource={handleAddResource}/>
          }
        />
        <Route 
          path="/resourcesList"
          element={
            user ?
              <ResourcesList resources={resources} user={user}/>
              :
              <Navigate to="/login"/>
          }
        /> 
      </Routes>
    </div>
    </>
  )
}

export default App
