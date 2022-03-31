import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayGames from './Components/DisplayGames/DisplayGames.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

function App() {

  const [entries, setEntries] = useState([]); // need to link to the database here?
  const apiLink = "https://localhost:7260/api/games";

  useEffect(() => { // gets list os songs when form is used
    getVideoGameData();
  },[])

  async function getVideoGameData(){
    let response = await axios.get(apiLink);
    setEntries(response.data);
    //console.log(response.data); // to view in console for testing
  } 

  return (
    <div className='page-container'>
      <div><NavBar/></div>
      <div><DisplayGames displayGames = {entries} /></div> 
    </div>
  );


}

export default App;
