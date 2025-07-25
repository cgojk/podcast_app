
// import MainContent from "../components/MainContent.jsx";

// import FetchingData from "../components/FetchingData.jsx";
import DataCards from "../components/DataCards.jsx";

import Quiz from "../components/Quiz.jsx";
// import CardsPodcasts from "../components/CardsPodcasts.jsx";
import HeroSection from "../components/HeroSection.jsx";



export default function Home() {
    return (
        <>
            {/* <AnimatedWave /> */}
            <HeroSection/>
                  
            <DataCards />
            {/* <FetchingData /> */}
            {/* <FormsContact/> */}
            {/* <MainContent />
            <CardsPodcasts /> */}
            <Quiz/>

           
            
        </>
    );
}

