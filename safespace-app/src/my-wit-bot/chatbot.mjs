/* Open AI Platform To Create Your Own Chatbot or Voice Assistant for Free 🔥! Wit.ai by Meta - https://www.youtube.com/watch?v=pFZSu_Jou7I*/ 
import fetch from "node-fetch"
import readline from "node:readline";

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

function chatbot() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async function askQuestion(query) {
    return new Promise((resolve) => {
      rl.question(query, (answer) => {
        resolve (answer);
      });
    });
  }


  async function main() {
    console.log('Welcome to SafeSpace!');
    console.log('What is your name?');
    
  
    const NameInput = await askQuestion('You: ');
    console.log('Hello  ' + NameInput + ', what are three comforting subjects for you?');
    const userInput = await askQuestion('You: ');
    /* chatgpt **/

    if (userInput.toLowerCase() === 'exit') {
      console.log('Goodbye!')
    }

    console.log('Now generating your SafeSpace...');

    const witResponse = await getWitResponse(userInput);

    const comfortingSubjects = witResponse.entities["comfortingSubject:comfortingSubject"].map(subject => subject.value);

    console.log('Bot:', JSON.stringify(witResponse, null, 2));

    console.log('Your comforting subjects:', comfortingSubjects);

    rl.close();
  }

  main().catch(console.error);
}

chatbot();
