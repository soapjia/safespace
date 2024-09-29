// src/Mainscreen.js
import React, { useState, useEffect } from 'react';
import './Mainscreen.css';
import plant from './assets/plant.png'; 
import guitar from './assets/guitar.png';
import dog from './assets/dog.png';
import makeupbag from './assets/makeupbag.png';
import book from './assets/books.png';
import pasta from './assets/pasta.png';
import space from './assets/space.png';
import console from './assets/console.png';
import tv from './assets/tv.png';
import soccer from './assets/soccer.png';


let availableItems = [
    { 
        id: 1, 
        name: 'plants', 
        position: {x: 65, y: 397}, 
        image: plant,
        description: 'https://www.youtube.com/embed/9ZheoFblBpA?si=yNwE_WpdTbDjNrY2' // Unique description for the pop-up
    },
    { 
        id: 2, 
        name: 'music', 
        position: {x: 1000, y: 290}, 
        image: guitar,
        description: 'https://open.spotify.com/embed/playlist/5OQdBlbYq41msjU0Z4w0dR?utm_source=generator'
    },
    { 
        id: 3, 
        name: 'animals', 
        position: {x: 840, y: 400}, 
        image: dog,
        description: 'https://www.htmlgames.com/game/Hunting+Jack+-+At+Home' 
    },
    { 
        id: 4, 
        name: 'beauty', 
        position: {x: 425, y: 372}, 
        image: makeupbag,
        description: 'https://www.allure.com/gallery/best-foundations-for-acne-prone-skin' 
    },
    { 
        id: 5, 
        name: 'books', 
        position: {x: 520, y: 430}, 
        image: book,
        description: 'https://abcnews.go.com/International/wireStory/japanese-fans-bid-farewell-beloved-panda-pair-return-114310836'
    },
    { 
        id: 6, 
        name: 'food', 
        position: {x: 660, y: 375}, 
        image: pasta,
        description: 'https://www.youtube.com/embed/Ew-3-8itpjc?si=cQxPb0Rlrz7MCfCf'
    },
    { 
        id: 7, 
        name: 'learning', 
        position: {x: 535, y: 147}, 
        image: space,
        description: 'https://www.youtube.com/embed/xuCn8ux2gbs?si=sD5cefyI8k5q7dID'
    },
    { 
        id: 8, 
        name: 'games', 
        position: {x: 760, y: 405}, 
        image: console,
        description: 'https://cdn.htmlgames.com/ZigZagGate/'
    },
    { 
        id: 9, 
        name: 'entertainment', 
        position: {x: 870, y: 250}, 
        image: tv,
        description: 'https://www.youtube.com/embed/xdHx1YEsWwk?si=OWJIsaw5Ig60gx5z'
    },
    { 
        id: 10, 
        name: 'sports', 
        position: {x: 240, y: 455}, 
        image: soccer,
        description: 'https://www.youtube.com/embed/A-r9sj7zHJ4?si=YDgZAANAww10aOWs'
    },
];

function Mainscreen({userItems = []}) {
    const [selectedItem, setSelectedItem] = useState(null);

    const closePopup = () => {
        setSelectedItem(null);
    };
    
      const handleClick = (item) => {
        setSelectedItem(item);
      };
  
    const userItemDetails = availableItems.filter(item => userItems.includes(item.name));

    return (
      <div className="Mainscreen">
        <div className="header">
          <h1>Welcome to your safe space! Click around to explore.</h1>
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
              onClick={() => handleClick(item)}
            >
              <img src={item.image} alt={item.name} />
            </div>
          ))}
  
          {/* Render the popup when an item is clicked */}
          {selectedItem && (
            <div className="popup">
              <div className="popup-content">
                  <iframe
                    src={selectedItem.description}
                    width="600"
                    height="400"
                    title="Web View"
                  ></iframe>

              </div> 
              <button onClick={closePopup} className='close-button'>Close</button>          
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Mainscreen;