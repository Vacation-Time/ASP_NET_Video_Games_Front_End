import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar.jsx';
import DisplayPlatformStats from './Components/GamePlatformStats/GamePlatformStats.jsx';
import DisplayGameInfo from './Components/DisplayGameInfo/DisplayGameInfo.jsx';


function App() {

  const [videoGameData, setVideogameData] = useState([]); 
  const apiLink = "https://localhost:7260/api/games";

  useEffect(() => { // gets list of games when form is used
    getVideoGameData();
  },[])

  async function getVideoGameData(){
    try{
      // debugger;    
      const response = await axios.get(apiLink);
      setVideogameData(response.data); // where all games data is retrieved I believe...
    } catch(ex){
      console.log(`ERROR in getViderGameData: ${ex}`);
    }
  } 

  return (
    <div className='page-container'>
      <div><NavBar/></div>
      <div><DisplayPlatformStats videoGameData={videoGameData}/></div>
      <div><DisplayGameInfo videoGameData = {videoGameData} /></div>
    </div>
  );


}

export default App;