import React, { useState } from 'react';

const DisplayGameInfo = ({videoGameData}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

        
    return (  
    <div className = 'display-container'>
        <div className='table-title'>
            <div className ='list-contain'>
                <h2 className='list-title'>Games</h2>
            </div>
            <div className = 'search-filter'>
                <label className='search-label'>Modify List View:</label>
                <input type='text' className='custom-input' placeholder="Happy Hunting =)" onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>
        <table className='game-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Name</th>
                <th>Publisher</th>
                <th>Year</th>            
                <th>Rank</th>
                <th>Genre</th>
                <th>Platform</th>                
                <th>North America Sales</th>
                <th>Japan Sales</th>
                <th>Europe Sales</th>            
                <th>Other Sales</th>
                <th>Total Global Sales</th>
            </tr>
        </thead>
    
        <tbody>
            {videoGameData.filter((game) => {
                if (searchTerm === ""){
                    return game;
                }
                else if (game.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.publisher.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.year.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.rank.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.platform.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.northAmericaSales.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.japanSales.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.europeSales.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.otherSales.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.totalGlobalSales.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return game;
                }
            })
        }{videoGameData.map((game, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{game.Name}</td>
                    <td>{game.Publisher}</td>
                    <td>{game.Year}</td>
                    <td>{game.Rank}</td>
                    <td>{game.Genre}</td>                   
                    <td>{game.Platform}</td>
                    <td>{game.NorthAmericaSales}</td>
                    <td>{game.EuropeSales}</td>
                    <td>{game.JapanSales}</td>
                    <td>{game.OtherSales}</td>
                    <td>{game.TotalGlobalSales}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>     
    );
}
 
export default DisplayGameInfo;

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

// ##############################################################

// 1. Create a state variable to hold the filtered games
// 2. Create a function that holds your filter logic (take it out of the HTML part)
// --In this function filter out the games the way you are, but create and set a variable equal to the filter function call (this will hold the new array filter returns)
// --Set the state variable that you created in step one, equal to this new array
// 3. Use the state variable in your "map" section that generates the rows of the table

let matchingGames = videoGameData.filter((game) => {      
    if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {   // searchTerm from search input 
    return true      
    }      
    else 
    return false  
    })  
    setDisplayGames(matchingGames)  // this is the step where we would save the result in a hook 
    }

    
let filteredGames = videoGameData.filter(game => {
    {videoGameData.filter((game) => {
        if (searchTerm === ""){
            return game;
        }
        else if (game.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return game;
        }
    });
}



const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
