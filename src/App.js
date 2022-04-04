import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import DisplayPlatformStats from './Components/GamePlatformStats/GamePlatformStats.jsx';
import DisplayGameInfo from './Components/DisplayGameInfo/DisplayGameInfo.jsx';


function App() {

  const [videoGameData, setVideoGameData] = useState([]); 
  const [gameSearchResults, setGameSearchResults] = useState([]); // holding the results after user enters search term and presses button. 
  const apiLink = "https://localhost:7260/api/games";

  useEffect(() => { // gets list of games when form is used
    getVideoGameData();
  },[])

  async function getVideoGameData(){
    try{
      // debugger;    
      const response = await axios.get(apiLink);
      setVideoGameData(response.data); // where all games data is retrieved I believe...
    } catch(ex){
      console.log(`ERROR in getVideoGameData: ${ex}`);
    }
  } 

  
// this is a function to filter by searchTerm
  function searchForGames(searchTerm){
    // debugger;
    let searchResults = videoGameData.filter(game => {
      return game.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setGameSearchResults(searchResults);
    console.log(searchResults);
  }

  return (
    <div className='page-container'>
      <div><NavBar/></div>
      
      <div><DisplayPlatformStats videoGameData={videoGameData}/></div>
      <SearchBar searchForGames={searchForGames}/>
      <div><DisplayGameInfo gameSearchResults={gameSearchResults} /></div>
    </div>
  );


}

export default App;