const url = "https://eloquentjavascript.net/author";

const mediaTypes = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];

async function fetchWith(mediaType) {
  const response = await fetch(url, {
    headers: {
      Accept: mediaType,
    },
  });

  const body = await response.text();
  console.log(`Media Type: ${mediaType}`);
  console.log(`Status Code: ${response.status}`);
  console.log(`Response Body:\n${body}\n`);
}

mediaTypes.forEach((mediaType) => fetchWith(mediaType));
