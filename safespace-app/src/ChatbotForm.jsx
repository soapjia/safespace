import React, { useEffect } from 'react'
import {useState} from 'react';
import './ChatbotForm.css'
//import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
//import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import { useNavigate } from "react-router-dom";
//import  {chatbotmjs} from './my-wit-bot/chatbot.mjs';




export default function ChatbotForm() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    var dataToSend = "";

   /* useEffect(() => {
        const fetchData = async() => {
            const data = fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent("I love cats. Dogs are cool. Pizza Lion")}`, {
            headers: {
              Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
              'Content-Type': 'application/json'
            }
          });
          const d = await (await data).json();
          console.log(d);
          setData(d);
        }

        fetchData().catch(console.error);
    }, []);*/
    
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
            What makes you feel safe?
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
             <button 
            onClick={() => {
                const fetchData = async() => {
                    const data = fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent(message)}`, {
                    headers: {
                      Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
                      'Content-Type': 'application/json'
                    }
                  });
                  const d = await (await data).json();
                  console.log(d);
                  setData(d);
                  dataToSend = d;
                }
        
                fetchData().catch(console.error);
            }


            } 
            type="submit" 
            className="send-button"
            >
            Send
            </button>
            <p>{data !== null && data.text}</p>
        </form>
       
        alert(dataToSend);


     
    </div>;
}
=======



export default function ChatbotForm() {
   const [message, setMessage] = useState("");
   const [chats, setChats] = useState("");
   const [isTyping, setIsTyping] = useState(false);
   const navigate = useNavigate();
   const [data, setData] = useState(null);
   var dataToSend = "";


  /* useEffect(() => {
       const fetchData = async() => {
           const data = fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent("I love cats. Dogs are cool. Pizza Lion")}`, {
           headers: {
             Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
             'Content-Type': 'application/json'
           }
         });
         const d = await (await data).json();
         console.log(d);
         setData(d);
       }


       fetchData().catch(console.error);
   }, []);*/
  
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
           What makes you feel safe?
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
            <button
           onClick={() => {
               const fetchData = async() => {
                   const data = fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent(message)}`, {
                   headers: {
                     Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
                     'Content-Type': 'application/json'
                   }
                 });
                 const d = await (await data).json();
                 console.log(d);
                 setData(d);
                 dataToSend = d;
               }
      
               fetchData().catch(console.error);
           }




           }
           type="submit"
           className="send-button"
           >
           Send
           </button>
           <p>{data !== null && data.text}</p>
       </form>
     
       alert(dataToSend);




   
   </div>;
}

