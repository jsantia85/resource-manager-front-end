import ResourceCard from "../../components/ResourceCard/ResourceCard"
import style from './ResourcesList.module.css'

const ResourcesList = (props) => {
  const profileId = props.profile

  const resourceBelongsToOwner = props.resources.filter((resource) => 
    resource.owner._id === profileId
  ) 

  return (
    <>
      <h1>Resources List</h1>
      <div className={style.cardContainer}>
        {resourceBelongsToOwner.map(resource =>
          <ResourceCard key={resource._id} resource={resource}/>
        )}
      </div>
    </>
  );
}

export default ResourcesList