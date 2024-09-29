// src/Mainscreen.js
import React, { useState } from 'react';
import './Mainscreen.css';
import plant from './assets/plant.png'; 
import guitar from './assets/guitar.png';

let userItems = ["Plant", "Guitar"];

let availableItems = [
    { 
        id: 1, 
        name: 'Plant', 
        position: {x: 100, y: 400}, 
        image: plant,
        description: 'https://www.youtube.com/embed/9ZheoFblBpA?si=yNwE_WpdTbDjNrY2' // Unique description for the pop-up
    },
    { 
        id: 2, 
        name: 'Guitar', 
        position: {x: 940, y: 275}, 
        image: guitar,
        description: 'This guitar is perfect for strumming your favorite tunes.' // Unique description for the pop-up
    }
];

function Mainscreen() {
    // Step 1: State to manage the pop-up visibility
    const [selectedItem, setSelectedItem] = useState(null);

    // Step 2: Handle item clicks
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Step 3: Close the pop-up
    const closePopup = () => {
        setSelectedItem(null);
    };

    return (
        <div className="Mainscreen">
            <div className="header"> 
                <h1>this space is all yours to explore :) </h1>
            </div>
            <div className="livingarea">
                {availableItems.map(item => (
                    userItems.includes(item.name) && ( // Ensure only user items are displayed
                        <div 
                            key={item.id}
                            className="object" 
                            style={{ 
                                position: 'absolute', 
                                left: item.position.x, 
                                top: item.position.y 
                            }}
                            onClick={() => handleItemClick(item)} // Click handler
                        >
                            <img src={item.image} alt={item.name} />
                        </div>
                    )
                ))}
            </div>

            {/* Step 4: Conditional pop-up rendering */}
            {selectedItem && (
                <div className="popup">
                    <div className="popup-content">
                        <iframe 
                            src={selectedItem.description} 
                            width="600" 
                            height="400" 
                            title="Web View" 
                        ></iframe>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mainscreen;
