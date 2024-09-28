/* Open AI Platform To Create Your Own Chatbot or Voice Assistant for Free 🔥! Wit.ai by Meta - https://www.youtube.com/watch?v=pFZSu_Jou7I*/ 
import fetch from "node-fetch"
import readlineSync from "readline-sync"

const WIT_AI_TOKEN = 'YOUR_WIT_AI_SERVER_ACCESS_TOKEN';

async function getWitResponse(message) {
  const response = await fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent(message)}`, {
    headers: {
      Authorization: `Bearer ${WIT_AI_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}

async function main() {
  console.log('Welcome to the Wit.ai chatbot!');
  while (true) {
    const userInput = readlineSync.question('You: ');
    if (userInput.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      break;
    }

    const witResponse = await getWitResponse(userInput);
    console.log('Bot:', JSON.stringify(witResponse, null, 2));
  }
}

main().catch(console.error);