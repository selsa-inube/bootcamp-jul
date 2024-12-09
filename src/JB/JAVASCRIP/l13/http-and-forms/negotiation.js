const url = "https://eloquentjavascript.net/author";

function fetchContent(type) {
  fetch(url, {
    headers: {
      Accept: type,
    },
  })
    .then((response) => {
      console.log(`Requested type: ${type}`);
      console.log(`Status: ${response.status}`);
      console.log(`Content-Type: ${response.headers.get("Content-Type")}`);
      return response.text();
    })
    .then((body) => {
      console.log(`Body: ${body}`);
      console.log("----");
    })
    .catch((error) => {
      console.error(`Error fetching ${type}:`, error);
    });
}
fetchContent("text/plain");
fetchContent("text/html");
fetchContent("application/json");
fetchContent("application/rainbows+unicorns");
