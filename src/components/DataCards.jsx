import CardsEntry from "./CardsEntry.jsx"


export default function DataCards() {
    return (
        <section className="podcast-section">
             <h1>Recent Podcasts</h1>
             <p>Check out our latest episodes and discover new favorites!</p>
        <div className="contacts">
            <CardsEntry 
                img="images/podcast_crime.png"
                name="The Daily"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam non ut, ratione magni quae, consectetur, at voluptatibus iste modi harum! Harum, dolor repellat. Dolor rem suscipit culpa accusamus quam?"
                duration="45min"/>
            <CardsEntry
             img="images/casefile.jpeg"
             name="Casefile"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam non ut, ratione magni quae, consectetur, at voluptatibus iste modi harum! Harum, dolor repellat. Dolor rem suscipit culpa accusamus quam?"
                duration="1hr 30min"/>
                
            <CardsEntry
             img="images/crimejunkie.png"
             name="Crime Junkie"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam non ut, ratione magni quae, consectetur, at voluptatibus iste modi harum! Harum, dolor repellat. Dolor rem suscipit culpa accusamus quam?"
            duration="1hr 15min"/>
                
            <CardsEntry
              img="images/suspect.jpeg"
               name="Suspect"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam non ut, ratione magni quae, consectetur, at voluptatibus iste modi harum! Harum, dolor repellat. Dolor rem suscipit culpa accusamus quam?"
                duration="50min"/>
                
        </div>
        </section>
    )
}

