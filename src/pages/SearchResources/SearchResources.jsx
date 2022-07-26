import ResourceCard from "../../components/ResourceCard/ResourceCard"
import style from './SearchResources.module.css'
import { useState } from "react"

const SearchResources = (props) => {
  const profileId = props.profile

  const resourceBelongsToOwner = props.resources.filter((resource) => 
    resource.owner._id === profileId
  ) 

  // Btn used for checking if state was properly reversed
  // <button onClick={() => console.log(props.resources)}>Log Data</button>

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
      <input className={style.searchInput} type="search" placeholder="Search..." onChange={(e) => searchItems(e.target.value)}/>
      
      <div className={style.cardContainer}>
        {searchInput.length > 1 ? (filteredResults.map((resource) => {
          return (<ResourceCard key={resource._id} resource={resource}/>)
        })) : (<h2>No Resources Found</h2>)}
      </div>
    </>
  );
}

export default SearchResources