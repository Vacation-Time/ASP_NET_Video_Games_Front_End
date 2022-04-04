import React from 'react';
import './DisplayGameInfo.css';
import { Chart } from "react-google-charts";


const DisplayGameInfo = ({gameSearchResults}) => {

    

    
    
        
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
                    </div>
                )
            })} 
              
        </div>

     ); 
}
 
export default DisplayGameInfo; 