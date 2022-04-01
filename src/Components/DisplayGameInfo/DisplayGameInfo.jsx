import React, { useState } from 'react';

const DisplayGameInfo = ({videoGameData}) => {

    const [searchTerm, setSearchTerm] = useState('');

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
            {videoGameData.displayGameInfo.filter(([game]) => {
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