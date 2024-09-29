import React from 'react'
import {useState} from 'react';
import './Chatbot.css'
//import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
//import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';

export default function Chatbot() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    
    const chat = async (e, message) => {
        e.preventDefault();
        
        

        setChats([...chats, {role:"user", content:message}]);
        setMessage(""); //this clears the text box

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submission
        }
    };

    return <div className="chatbot">
        <div class="description">
            tell us about the things that make you feel safe.
        </div>

        <form onSubmit={e => chat(e, message)} className="form-container">
            <textarea 
                type="text" 
                name='message' 
                value={message} 
                placeholder='Type here'
                onChange={e => setMessage(e.target.value)}
                className="input-large"
                onKeyDown={handleKeyDown}
            
            />
            <button type="submit" className="send-button">Submit</button>
        </form>


     
    </div>;
}