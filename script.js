const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
}
