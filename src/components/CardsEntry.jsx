import { Link } from "react-router-dom"

export default function CardsEntry({id,img, name,genre,description, duration}) {
    return (
      
         
        <article className="contact-card">
            <Link to={`/podcasts/${id}`} 
                  aria-label={`View details for podcast "${name}", genre: ${genre}, description:${description}, duration: ${duration}, `}
>
               <img 
                src={img}
                alt="podcast crime"/>
           </Link>
                <div className="title_genre">
                  <h3>{name}</h3>
                 <span className={`genre-tag ${genre?.toLowerCase()} selected`}>{genre}</span>
                </div>
                <div className="info-group">
                    
                    <p>{description}</p>
                </div>
                <div className="info-group">
                    
                    <p className="duration_podcast">{duration}</p>

                </div>
        </article>
   
    )
}