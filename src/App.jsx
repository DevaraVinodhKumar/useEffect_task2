// import React, { useEffect, useState } from 'react'
// import { Profile } from './Profile/Profile'

// const App = () => {
//   const [profile,setProfile] = useState([])

//   useEffect(()=>{

//     const userProfile = async () =>{
//       try{
//         let response = await fetch("http://localhost:3000/people"); 
//         let data = await response.json();
//         console.log(data);
//         setProfile(data)
//       }
//       catch(error){
//         console.log(error);
//       }
//     }
//     userProfile();
//   },[])
//   return (
//     <div>
//       {profile.map((profile) => {
//         return  <Profile  {...profile} key = {profile.id}/>
//       })}
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import Profile from "./Profile/Profile";
import Buttons from "./Profile/Buttons";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setCurrentIndex(randomIndex);
  };

  if (people.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Profile person={people[currentIndex]} />
      <Buttons
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSurprise={handleSurprise}
      />
    </div>
  );
}

export default App;
