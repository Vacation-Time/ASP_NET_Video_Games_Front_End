import React from 'react';
import './DisplayGameInfo.css';
import { Chart } from "react-google-charts";


const DisplayGameInfo = ({gameSearchResults}) => {

    function generateDataFormChart() {

        console.log('All Games Data', gameSearchResults);

        //Filter games by year
        let filteredGames = gameSearchResults.filter(game => game.year >= 2013); // filters game data by year (2013-present)

        // console.log('Filtered Games', filteredGames); // identifies log in inspect element for easy identification

        let platforms = filteredGames.map(game => {
            return game.platform
        }); // maps platforms from filtered games

        // console.log('Platforms', platforms); // identifies log in inspect element for easy identification

        let distinctPlatforms = [...new Set(platforms)]; // creates array of unique platforms

        // console.log('Distinct Platforms', distinctPlatforms); // identifies log in inspect element for easy identification

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlatforms.map(platform => {

            let allGamesForPlatform = filteredGames.filter(game => game.platform === platform); // filters games by platform

            // now we need to loop through allGamesForPlatform and sum each game's global sales

            let totalSalesForPlatform = allGamesForPlatform.reduce((accumulator, currentValue) => accumulator + currentValue.globalSales, 0);
            // console.log('Total Sales for Platform', totalSalesForPlatform); // identifies log in inspect element for easy identification


            // Once we have the sum, we can push it to an array value for "10" which I changed to 'totalSalesForPlatform' and it worked!

            return [platform, totalSalesForPlatform, "darkgreen"];
        }); // creates array of arrays for each platform

        // console.log('Platform Arrays', platformArrays); // identifies log in inspect element for easy identification

        const data = [
            ["Platform", "Sales Per Platform in Millions", { role: "style" }],
            ...platformArrays
        ];

        return data;
    }
            
    return ( 
        <div>
            <h1 className="game-info-header">Game Info: </h1>
            {gameSearchResults.map(game => {  
                return (
                    <div key={game.id}>
                        <h3>{game.name}</h3>
                        <h4>▶{game.year}</h4>
                        <h4>▶{game.platform}</h4>
                        <h4>▶{game.genre}</h4>
                        <Chart chartType="ColumnChart" width="75%" height="250px" data={generateDataFormChart()} />
                    </div>
                )
            })} 
              
        </div>

     ); 
}
 
export default DisplayGameInfo; 