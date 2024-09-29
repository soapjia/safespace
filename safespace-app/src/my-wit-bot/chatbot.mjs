/* Open AI Platform To Create Your Own Chatbot or Voice Assistant for Free 🔥! Wit.ai by Meta - https://www.youtube.com/watch?v=pFZSu_Jou7I*/ 
import fetch from "node-fetch"

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

function chatbotmjs(x) {
  alert("insde chatbot");
  async function main() {
    
  const userInput = x;
  try {
    alert("insde try");
    const witResponse = await getWitResponse(userInput);
    const comfortingSubjects = witResponse.entities["comfortingSubject:comfortingSubject"]?.map(subject => subject.value) || [];
    return comfortingSubjects;
  } catch (error) {
    alert("insde catch");
    console.error('Error:', error.message);
    return [];
  }

  }

  main().catch(console.error);
}

