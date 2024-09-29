import React, { useEffect, useState } from 'react';
import './ChatbotForm.css';
import { useNavigate } from "react-router-dom";
import Mainscreen from './Mainscreen'; 

export default function ChatbotForm() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [userItems, setUserItems] = useState([]); 
    const [showMainscreen, setShowMainscreen] = useState(false); // State to control visibility of Mainscreen
    const [data, setData] = useState(null);
    var dataToSend = "";

    const chat = async (e) => {
        e.preventDefault();
        setChats([...chats, { role: "user", content: message }]);
        setMessage("");

        // Fetch data from Wit.ai
        const fetchData = async () => {
            const response = await fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent(message)}`, {
                headers: {
                    Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
                    'Content-Type': 'application/json'
                }
            });
            const d = await response.json();
            console.log(d);
            setData(d);
            dataToSend = d;
            
            // Split the text into an array of words
            if (d.text) {
                const wordsArray = d.text.split(/[\s,]+/);
                console.log(wordsArray);
                setUserItems(wordsArray);
            }
        }

        fetchData()
            .then(() => {
                setShowMainscreen(true); // Show Mainscreen after fetching data
            })
            .catch(console.error);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
        }
    };

    // Conditional rendering of Mainscreen based on showMainscreen state
    if (showMainscreen) {
        return <Mainscreen userItems={userItems} />;
    }

    return (
        <div className="chatbot">
            <div className="description">
                What makes you feel safe?
            </div>

            <form onSubmit={chat} className="form-container">
                <textarea
                    type="text"
                    name='message'
                    value={message}
                    placeholder='Type here'
                    onChange={e => setMessage(e.target.value)}
                    className="input-large"
                    onKeyDown={handleKeyDown}
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
}
