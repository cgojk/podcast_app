import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastControls from "../../components/PodcastControls"; // Importing the PodcastControl component


// 🎙 PodcastControlPage (page layout)
export default function PodcastControl() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);


 

  useEffect(() => {
    fetch(`/api/podcasts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPodcast(data.podcast); // Ensure Mirage returns { podcast: ... }
      });
  }, [id]);

  if (!podcast) return <p>Loading podcast...</p>;

  return (
    <div className="listen-page container">
      <div className="player-card">
        <img src={podcast.imageUrl} alt={podcast.name} className="cover-art" />
        <div className="podcast-info">
          <h2>{podcast.name}</h2>
          <p><strong>Genre:</strong> {podcast.genre}</p>
          <p><strong>Description:</strong> {podcast.description}</p>
          <p><strong>Duration:</strong> {podcast.duration} min</p>
        </div>
        <PodcastControls audioUrl={podcast.audioUrl} />
       
      </div>
    </div>
  );
}