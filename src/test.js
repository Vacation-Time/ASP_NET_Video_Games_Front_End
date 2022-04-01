import React, { useState } from 'react';
import './DisplaySong.css';
import {Button} from 'react-bootstrap';

const DisplaySongs = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (  
    <div className = 'display-container'>
        <div className='table-title'>
            <div className ='list-contain'>
                <h2 className='list-title'>Songs</h2>
            </div>
            <div className = 'search-filter'>
                <label className='search-label'>Modify List View:</label>
                <input type='text' className='custom-input' placeholder="Happy Hunting =)" onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>
        <table className='song-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>            
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
            {props.displaySongs.filter((song) => {
                if (searchTerm === ""){
                    return song;
                }
                else if (song.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.album.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.release_date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || song.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return song;
                }
            })
            .map((song, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                    <td><Button type = 'delete' variant="outline-danger" size="sm" onClick={() => props.deleteSongProp(song)}>Delete</Button></td> 
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>     
    );
}
 
export default DisplaySongs;

//#######################################################

import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Name", "Salary", "Full time employee"],
    ["Mike", { v: 10000, f: "$10,000" }, true],
    ["Jim", { v: 8000, f: "$8,000" }, false],
    ["Alice", { v: 12500, f: "$12,500" }, true],
    ["Bob", { v: 7000, f: "$7,000" }, true],
  ];
  
  export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 1,
  };

const DisplayGameInfo = ({videoGameData}) => {

    function generateDataFormChart() {

        console.log('All Games Data', videoGameData);
    }
    return ( 
        <div>
        <h1>Game Info</h1>
        <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={generateDataFormChart()}
      options={options}
    />
    </div>
     );
}


 
export default DisplayGameInfo;