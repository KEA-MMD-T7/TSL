const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(bygKatNav);

function bygKatNav(data) {
  let kats = [];
  data.forEach((elm) => kats.push(elm.Mærke));
  const katOnce = new Set(kats);
  console.log(katOnce);
  katOnce.forEach((kat) => {
    let knap = document.createElement("a");
    knap.textContent = kat;
    knap.href = `liste.html?kat=${kat}`;
    document.querySelector("nav").appendChild(knap);
  });
}

function vis(data) {
  console.table(data);
}
