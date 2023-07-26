// SpotifyAuth.js
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
console.log({ clientId, clientSecret });

const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error("Failed to get the token");
    }

    const data = await response.json();
    const accessToken = data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Error getting the token:", error);
    return null;
  }
};

export default getToken;
