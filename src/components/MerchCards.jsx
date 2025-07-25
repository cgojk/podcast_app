import { Link } from "react-router-dom"


export default function MerchCards({id,img,name,genre, price, description, duration}) {
    return (
      
         
        <article className="contact-card">
            <Link to={`/store/${id}`} 
                  aria-label={`View details for podcast "${name}", genre: ${genre}, price:${price}, description:${description},duration: ${duration}`}
>
               <img 
                src={img}
                alt="podcast crime"/>
           </Link>
                <div className="title_genre">
                  <h3>{name}</h3>
                 <span className={`genre-tag ${genre?.toLowerCase()} selected`}>{genre}</span>
                </div>

                <div className="info-group ">
                   
                    <p className="price_merch">{price}</p>
                    <p className="description_merch">{description}</p>
                    <p className="duration_podcast">{duration}</p>
                </div>
        </article>
   
    )
}