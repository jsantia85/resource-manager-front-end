import ResourceCard from "../../components/ResourceCard/ResourceCard"
import styles from './SearchResources.module.css'
import { useState } from "react"

const SearchResources = (props) => {
  const profileId = props.profile

  const resourceBelongsToOwner = props.resources.filter((resource) => 
    resource.owner._id === profileId
  ) 


  const [searchInput, setSearchInput] = useState('')

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = resourceBelongsToOwner.filter((resource) => {
        return Object.values(resource).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(resourceBelongsToOwner)
    }
  }

  const [filteredResults, setFilteredResults] = useState()

  return (
    <>
      <input className={styles.searchInput} type="search" placeholder="Search..." onChange={(e) => searchItems(e.target.value)}/>
      
      <div className={styles.cardContainer}>
        {searchInput.length > 1 ? (filteredResults.map((resource) => {
          return (<ResourceCard key={resource._id} resource={resource} handleDeleteResource={props.handleDeleteResource} profileId={profileId}/>)
        })) : (<h2 className={styles.emptyResult}>No Resources Found</h2>)}
      </div>
    </>
  );
}

export default SearchResources