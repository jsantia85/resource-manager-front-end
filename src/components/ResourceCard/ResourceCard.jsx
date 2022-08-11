import { NavLink } from 'react-router-dom'
import styles from './ResourceCard.module.css'

const ResourceCard = (props) => {
  console.log(props.resource)


  return(
    <>  
      <div className={styles.card} >
      <img src={props.resource.photo} className="card-img-top" alt="Pic"/>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>
            {props.resource.title}
          </h5>
          <p className={styles.text}>
            {props.resource.category}
          </p>
          {props.profileId === props.resource.owner?._id &&
            <div className={styles.btnContainer}>
              <a href={props.resource.url} className="btn btn-dark">Link</a>
              <NavLink
                to="/edit"
                className="btn btn-dark"
                state={props.resource}>
                  Edit
              </NavLink>
              <NavLink to="/resourcesList"> 
                <button className='btn btn-dark' onClick={() => props.handleDeleteResource(props.resource._id)}>
                  Delete
                </button>
              </NavLink>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ResourceCard;