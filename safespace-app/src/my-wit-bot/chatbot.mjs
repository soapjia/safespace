/* Open AI Platform To Create Your Own Chatbot or Voice Assistant for Free 🔥! Wit.ai by Meta - https://www.youtube.com/watch?v=pFZSu_Jou7I*/ 
import fetch from "node-fetch"
import readlineSync from "readline-sync"

const WIT_AI_TOKEN = 'G566DELNKNUW737UPXLK4TSXERST77QR';

async function getWitResponse(message) {
  const response = await fetch(`https://api.wit.ai/message?v=20210626&q=${encodeURIComponent(message)}`, {
    headers: {
      Authorization: `Bearer ${'G566DELNKNUW737UPXLK4TSXERST77QR'}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}

async function main() {
  console.log('Welcome to SafeSpace!');
  console.log('What is your name?');
  while (true) {
    const NameInput = readlineSync.question('You: ');
    console.log('Hello  ' + NameInput + ', what are three comforting subjects for you?');
    const user_2Input = readlineSync.question('You: ');

  
    if (user_2Input.toLowerCase() === 'exit') {
      console.log('Now generating your SafeSpace');
      break;
    }

    const witResponse = await getWitResponse(userInput);
    console.log('Bot:', JSON.stringify(witResponse, null, 2));
  }
}

main().catch(console.error);