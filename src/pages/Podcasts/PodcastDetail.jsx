import React from "react"
import { useParams, Link } from "react-router-dom"
 
import { RiPlayCircleFill, RiDownload2Line, RiShareForwardLine, RiHeartFill , RiHeadphoneFill} from 'react-icons/ri';



export default function PodcastDetail() {
    const params =useParams()
    const [podcast, setPodcast] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/podcasts/${params.id}`)
            .then(res => res.json())
            .then(data => setPodcast(data.podcast))
    }, [params.id])
    
    return(
        <section className="podcast-detail container">
            {podcast ? (
                <>
                   
                    <div className="podcast-image">
                        <img src={podcast.imageUrl} alt={`Image of ${podcast.name}`} />
                        <div className="podcast-icons">
                            
                            <button aria-label="Play audio" className="icon-button">
                            <RiPlayCircleFill size={36} />
                            </button>
                            <button aria-label="Download podcast" className="icon-button">
                            <RiDownload2Line size={32} />
                            </button>
                            <button aria-label="Share podcast" className="icon-button">
                            <RiShareForwardLine size={32} />
                            </button>
                            <button aria-label="Add to favorites" className="icon-button">
                            <RiHeartFill size={32} color="#e63946" />
                            </button>
                        </div>
                    </div>

                    <div className="podcast-content">
                         <h1>{podcast.name}</h1>
                        <p><strong>Genre:</strong> {podcast.genre}</p>
                        <p><strong>Description:</strong> {podcast.description}</p>
                        <p><strong>Duration:</strong> {podcast.duration} min</p>


                    <Link to={`/podcasts/${podcast.id}/listen`} className=" flex-btnicon">
                       <RiHeadphoneFill size={32}  />
                        <h3>Listen podcast</h3>
                    </Link>

                     
                    </div>
                </>
            ) : (
                <p>Loading podcast details...</p>
            )}
        </section>
    )
} 