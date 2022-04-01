import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DisplayGames from './Components/DisplayGames/DisplayGames.jsx';
// import NavBar from './Components/NavBar/NavBar.jsx';
// import GamesChart from './Components/GamesChart/GamesChart.jsx';
import DisplayPlatformStats from './Components/GamePlatformStats/GamePlatformStats.jsx';

function App() {

  const [videoGameData, setVideogameData] = useState([]); // need to link to the database here?
  const apiLink = "https://localhost:7260/api/games";

  useEffect(() => { // gets list of games when form is used
    getVideoGameData();
  },[])

  async function getVideoGameData(){
    try{
      debugger;    
      const response = await axios.get(apiLink);
      setVideogameData(response.data);
    } catch(ex){
      console.log(`ERROR in getViderGameData: ${ex}`);
    }
  } 

  return (
    <div className='page-container'>
      <div>
        <DisplayPlatformStats videoGameData={videoGameData}/>
      </div>
      {/* <div><NavBar/></div>
      <div><DisplayGames displayGames = {videoGameData} /></div>
      <div><GamesChart displayGames = {videoGameData} /></div> */}
    </div>
  );


}

export default App;
