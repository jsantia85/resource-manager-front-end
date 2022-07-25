import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const profileId = props.profile 

  const singleProfile = profiles.filter((profile) => 
    profile._id === profileId
  )

  console.log('THIS IS THE SINGLE PROFILE', singleProfile)

  return (
    <>
      <h1>Hello. Welcome to your profile page.</h1>
      {singleProfile.length ? 
        <>
          {singleProfile.map(profile =>
            <h3 key={profile._id}>Your Name: {profile.name}</h3>
          )}
        </>
      :
        <p>No profile yet</p>
      }
    </>
  )
}

export default Profiles