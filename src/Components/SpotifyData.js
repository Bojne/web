const token =
  "BQCcux9ztqKLHhULO7CLNj0-bIKeME6a5Kbpf7LDMRBfKMWbyyD_8mY9yxywqop6vdAvToybJJy5zrSqvezO-vkVXYd82RDhD6b32ndHuXGp-IUiHDbJTDR3n2jfhpuD0ZOpeTj1DQHcvM33h8UG1R7Bd_WF0a6Mofp1cJqBi0ixXlNZWRt41iOvYwdYtgXXyscO-biKVi9l5cZPRJkWW-FXt-0D6WwVQwyi6NTQ1o1iEFY10DNoLCS7IeguxsdP2-vObg";
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  )
);
