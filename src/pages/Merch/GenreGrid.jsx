
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GenreGrid() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function fetchMerchesGenre() {
      const res = await fetch("/api/merches")
      const data = await res.json()

      // Extract unique genres and pick the first podcast's image for each genre
      const genreMap = {}
      data.merches.forEach(item => {
        if (!genreMap[item.genre]) {
          genreMap[item.genre] = item.imageUrl
        }
      })

      // Convert to array of objects [{name, imageUrl}, ...]
      const genresArr = Object.entries(genreMap).map(([name, imageUrl]) => ({ name, imageUrl }))
      setGenres(genresArr)
    }
    fetchMerchesGenre()
  }, [])

  return (

    <section className="genre-grid container">
      <h1 className="title_section"> Select your favourite genre podcast </h1>
      <div className="grid">
        {genres.map(({ name, imageUrl }) => (
          <Link key={name} to={`/store/genre/${name}`} className="genre-card">
            <img src={imageUrl} alt={name} />
            <h2>{name.toUpperCase()}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}


