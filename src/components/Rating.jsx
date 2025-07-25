
import {useState} from 'react';



export default function Rating({color = 'gold'}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    // Array of stars from 1 to 5
    // This can be used to display the rating visually
    // or to allow users to select a rating
    const stars = Array.from ({length:5 }, (_,i)=> i + 1);
    const feedbackMessages = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];

    // This is a simple rating component that displays stars
    // and allows users to select a rating by hovering over the stars
  return (

    <div className="container rating-container">
        <h2>Rate your experience</h2>
    <div className="stars">
        {stars.map((star) => (
            <span
            onClick={()=>setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className='star'
            style={{color: star <= (hover || rating) ? color : '#ccc'}}
            aria-label={`Rate ${star} out of 5`}
                 >

                 {'\u2605'}
                 </span>
            ))}
        
        
      </div>
      {rating >0  && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
}
