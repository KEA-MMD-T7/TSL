const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(bygKatNav);

function bygKatNav(data) {
  // let kats = [];
  // data.forEach((elm) => kats.push(elm.Taksonomi_1));
  // const katOnce = new Set(kats);
  const katOnce = new Set(data.map((elm) => elm.Taksonomi_2));
  katOnce.forEach((kat) => {
    if (kat != "") {
      let knap = document.createElement("a");
      knap.textContent = kat;
      knap.href = `liste.html?kat=${kat}`;
      document.querySelector("nav").appendChild(knap);
    }
  });
  vis(data);
}

function vis(data) {
  console.log(data);
}
