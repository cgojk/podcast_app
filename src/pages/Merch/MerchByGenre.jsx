

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MerchByGenre() {
  const { genre } = useParams()
  // Declare a state variable to store the list of merch for that genre
  const [merchandiseGenre, setMerchandiseGenre] = useState([])
  // Declare a state variable to handle errors
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMerchandiseByGenre() {
      // Define an async function to fetch the merchandise
      try {
        const res = await fetch("/api/merches")
        // Start of the try block: this is to attempt the request
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        // Check if the response is ok, if not throw an error
        // If the response is ok, parse the JSON data
        const data = await res.json()
        const filtered = data.merches.filter(p => p.genre === genre)
        // Filter the merchandise based on the genre from the URL params
        // and set the state with the filtered data
        setMerchandiseGenre(filtered)
        // Save the filtered results in state so it shows on the page
      } catch (err) {
        // Start of the catch block: this runs if anything failed above
        console.error("Failed to fetch merch:", err)
        setError("Failed to load merchandise.")
      }
    }

    fetchMerchandiseByGenre()
  }, [genre])

  return (
    <section className="merch-list container">
      <h1 className="title_section"> {genre.toUpperCase()} Podcasts </h1>
      
      {error && <p className="error">{error}</p>}

      <div className="merch-grid">
        {merchandiseGenre.map(item => (
          <article key={item.id} className="merch-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Duration: {item.duration} min</p>
          </article>
        ))}
      </div>
    </section>
  )
}