import React from "react"
import CardsEntry from "../../components/CardsEntry.jsx" // adjust path if needed


export default function Podcasts() {
    const [podcasts, setPodcasts] = React.useState([])

    React.useEffect(() => {
        fetch("/api/podcasts")
            .then(res => res.json())
            .then(data => setPodcasts(data.podcasts))
    }, [])

    const podcastCards = podcasts.map(podcast => (
        <CardsEntry

            key={podcast.id}
            id={podcast.id} // assuming each podcast has a unique id
            img={podcast.imageUrl} alt={`Image of ${podcast.name}`}
            genre={podcast.genre}
            name={podcast.name}
            description={podcast.description}
            duration={`Duration: ${podcast.duration} min`} // using price as a fake duration for now
        />
    ))

    return (
        <section className="podcast-section">
            <h1 className="title_section">Explore our Podcasts</h1>
            <p className="title_section-sm">Browse our curated list of episodes.</p>
            <div className="contacts">
                {podcastCards}
            </div>
        </section>
    )
}