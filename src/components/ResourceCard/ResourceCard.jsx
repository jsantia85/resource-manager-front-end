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
        </div>
      </div>
    </>
  )
}

export default ResourceCard;