import styled from "styled-components";
import React, { useState, useEffect } from "react";
import getToken from "../Components/SpotifyAuth";

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: monospace, monospace;
  margin-top: 3rem;
`;

async function fetchWebApi(endpoint, method, token) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
  });
  return await res.json();
}

async function getTopTracks(accessToken) {
  return await fetchWebApi(
    "v1/me/top/tracks?time_range=short_term&limit=5",
    "GET",
    accessToken
  );
}

function SpotifyApp() {
  const [tracks, setTracks] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Call the getToken function to get the access token
    getToken().then((token) => {
      setAccessToken(token);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const topTracks = await getTopTracks(accessToken);
        setTracks(topTracks.items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTracks([]); // Set an empty array to avoid an infinite loading loop on error
      }
    }
    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <Wrapper>
      {tracks ? (
        <div>
          <p>Recent songs I listen to:</p>
          <ul>
            {tracks.map((track) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      (Reading this data from Spotify)
    </Wrapper>
  );
}

export default SpotifyApp;
