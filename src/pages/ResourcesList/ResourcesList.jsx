import ResourceCard from "../../components/ResourceCard/ResourceCard"

const ResourcesList = (props) => {
  const profileId = props.profile

  const resourceBelongsToOwner = props.resources.filter((resource) => 
    resource.owner._id === profileId
  ) 

  return (
    <>
      <h1>Resources List</h1>
      
      {resourceBelongsToOwner.map(resource => 
          <ResourceCard key={resource._id} resource={resource}/>
        )}
    </>
  );
}

export default ResourcesList