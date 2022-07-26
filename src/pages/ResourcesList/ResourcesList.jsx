import ResourceCard from "../../components/ResourceCard/ResourceCard"
import style from './ResourcesList.module.css'
import { useState } from "react"

const ResourcesList = (props) => {
  const profileId = props.profile

  const resourceBelongsToOwner = props.resources.filter((resource) => 
    resource.owner._id === profileId
  ) 

  const reverseArray = (array) => {
    let reversedArray = array.reverse();
    return reversedArray
  };

  // Btn used for checking if state was properly reversed
  // <button onClick={() => console.log(props.resources)}>Log Data</button>

  return (
    <>
      <h1>All Resources</h1>

      <button className={style.btn} onClick={() => {
        let newResources = props.resources;
        props.setResources(reverseArray([...newResources]))
      }}>Reverse Order</button>

      <div className={style.cardContainer}>
        {resourceBelongsToOwner.map(resource =>
          <ResourceCard key={resource._id} resource={resource}/>
        )}
      </div>
    </>
  );
}

export default ResourcesList