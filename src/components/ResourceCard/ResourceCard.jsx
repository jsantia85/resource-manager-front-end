import { NavLink } from 'react-router-dom'
import style from './ResourceCard.module.css'

const ResourceCard = (props) => {
  
  return(
    <>  
      <div className={style.card} >
      <img src={props.resource.photo} className="card-img-top" alt="Pic"/>
        <div className={style.cardBody}>
          <h5 className={style.cardTitle}>
            {props.resource.title}
          </h5>
          <p className={style.text}>
            {props.resource.category}
          </p>
          <a href={props.resource.url} className="btn btn-dark">Link</a>
          {props.profileId === props.resource.owner?._id &&
          <NavLink to="/resourcesList"> 
            <button className='btn btn-dark' onClick={() => props.handleDeleteResource(props.resource._id)}>Delete</button>
          </NavLink>
          }
        </div>
      </div>
    </>
  )
}

export default ResourceCard;