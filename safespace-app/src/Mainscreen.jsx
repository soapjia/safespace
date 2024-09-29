// src/Mainscreen.js
import React from 'react';
import './Mainscreen.css';
import plant from './assets/plant.png'; 
import guitar from './assets/guitar.png';
let userItems = ["Plant", "Guitar"];

let availableItems = [
    { id: 1, name: 'Plant', position: {x: 100, y:400}, image: plant},
    { id: 2, name: 'Guitar', position: {x: 940, y:275}, image: guitar}
];

function Mainscreen() {
    // Step 1: Find user items' details from availableItems
    const userItemDetails = availableItems.filter(item => userItems.includes(item.name));

  return (
    <div className="Mainscreen">
        <div className="header"> 
            <h1>welcome to your safe space!</h1>
        </div>
        <div className="livingarea">
            {userItemDetails.map(item => (
                <div 
                    key={item.id}
                    className="object" 
                    style={{ 
                        position: 'absolute', 
                        left: item.position.x, 
                        top: item.position.y 
                    }}
                >
                    <img src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  );
}

export default Mainscreen;