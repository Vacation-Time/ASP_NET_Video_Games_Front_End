import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({videoGameData}) => {

    function generateDataFormChart() {

        console.log('All Games Data', videoGameData);

        //Filter games by year
        let filteredGames = videoGameData.filter(game => game.year >= 2013); // filters game data by year (2013-present)

        console.log('Filtered Games', filteredGames); // identifies log in inspect element for easy identification

        let platforms = filteredGames.map(game => {
            return game.platform
        }); // maps platforms from filtered games

        console.log('Platforms', platforms); // identifies log in inspect element for easy identification

        let distinctPlatforms = [...new Set(platforms)]; // creates array of unique platforms

        console.log('Distinct Platforms', distinctPlatforms); // identifies log in inspect element for easy identification

        // ["PS3", 10, "silver"]

        let platformArrays = distinctPlatforms.map(platform => {

            let allGamesForPlatform = filteredGames.filter(game => game.platform === platform); // filters games by platform

            // now we need to loop through allGamesForPlatform and sum each game's global sales

            let totalSalesForPlatform = allGamesForPlatform.reduce((accumulator, currentValue) => accumulator + currentValue.globalSales, 0);
            console.log('Total Sales for Platform', totalSalesForPlatform); // identifies log in inspect element for easy identification


            // Once we have the sum, we can push it to an array value for "10" which I cahnged to 'totalSalesForPlatform' and it worked!

            return [platform, totalSalesForPlatform, "darkblue"];
        }); // creates array of arrays for each platform

        console.log('Platform Arrays', platformArrays); // identifies log in inspect element for easy identification

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays
        ];

        return data;
    }

    return ( 
        <div>
            <h1>Platform By Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>

     );
}
 
export default DisplayPlatformStats;