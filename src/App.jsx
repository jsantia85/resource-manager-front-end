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
import SearchResources from './pages/SearchResources/SearchResources'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [resources, setResources] = useState([])
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
    setResources([...resources, newResource])
    navigate('/resourcesList')
  }

  useEffect(() => {
    const fetchResources = async () => {
      const resourceData = await resourceService.getAll()
      setResources(resourceData)
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
          element={
            user ? 
              <Profiles profile={user.profile} /> 
              : 
              <Navigate to="/login" />}
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
              <ResourcesList resources={resources} profile={user.profile} setResources={setResources}/>
              :
              <Navigate to="/login"/>
          }
        /> 
        <Route 
          path="/searchResources"
          element={
            user ?
              <SearchResources resources={resources} profile={user.profile} setResources={setResources}/>
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
