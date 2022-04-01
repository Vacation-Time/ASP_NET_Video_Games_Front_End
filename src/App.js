import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
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
=======
import DisplayGames from './Components/DisplayGames/DisplayGames.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';

function App() {

  const [allGames, setAllGames] = useState([]); 
  const [displayGames, setDisplayGames] = useState([]);
  const [game, setGame] = useState([]);
  const apiLink = "https://localhost:7260/api/games";

  useEffect(() => { //this is used to render the list of songs on App execution
    getAllGames();
    getDisplayGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get(apiLink);
    setAllGames(response.data);
  }
  
  async function getDisplayGames(){
    let response = await axios.get(apiLink);
    setDisplayGames(response.data);
  }

  // async function getGameById(game){
  //   let response = await axios.get(`https://localhost:7260/api/games/${game.id}`)
  //   setGame(response.data);
  //   console.log(response.data)
  // }

  return (
    <div className='page-container'>
      <div><NavBar/></div>
      <div><DisplayGames parentGame = {game} /></div> 
>>>>>>> 60a7fa666c084264d88fc676cbc47a522e27d623
    </div>
  );


}

export default App;
