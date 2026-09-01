async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch joke: ${response.statusText}`);
  }

  const data = await response.json();
  return data.joke;
}

export default getJoke;