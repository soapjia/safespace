export async function auth() {
    const clientId = "9a61ff0ba7514e08b89fc11e373e837a"; // Replace with your client id
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = await getAccessToken(clientId, code);
        const profile = await fetchProfile(accessToken);
        const playlists = await fetchPlaylists(accessToken); // Fetch playlists
        console.log(profile);
        populateUI(profile);
        return { accessToken, playlists }; // Return access token and playlists
    }
}

export async function fetchPlaylists(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const data = await response.json();
    return data.items; // Return an array of playlists
  }
   
    export async function redirectToAuthCodeFlow(clientId) {
       const verifier = generateCodeVerifier(128);
       const challenge = await generateCodeChallenge(verifier);
   
   
       localStorage.setItem("verifier", verifier);
   
   
       const params = new URLSearchParams();
       params.append("client_id", clientId);
       params.append("response_type", "code");
       params.append("redirect_uri", "http://localhost:5173/Mainscreen");
       params.append("scope", "user-read-private user-read-email playlist-read-private");
       params.append("code_challenge_method", "S256");
       params.append("code_challenge", challenge);
   
   
       document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }
   
   
    function generateCodeVerifier(length) {
       let text = '';
       let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   
   
       for (let i = 0; i < length; i++) {
           text += possible.charAt(Math.floor(Math.random() * possible.length));
       }
       return text;
    }
   
   
    async function generateCodeChallenge(codeVerifier) {
       const data = new TextEncoder().encode(codeVerifier);
    }

    async function fetchProfile(accessToken) {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.json();
    }

    export async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem("verifier");
    }
    
    function populateUI(profile) {
        console.log("User Profile:", profile);
        // You can implement UI changes based on profile data here if needed
    }