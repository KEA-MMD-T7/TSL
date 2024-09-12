const params = new URLSearchParams(window.location.search);
const kat = params.get("kat");
window.addEventListener("load", init);
console.log(kat);

let ul;

function init() {
  document.querySelector("h1").textContent = kat;
  ul = document.querySelector("ul");
  hentData();
}

const katUrl = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?Taksonomi_2=eq.${kat}`;

const options = {
  headers: {
    apikey: key,
  },
};

function hentData() {
  fetch(katUrl, options)
    .then((res) => res.json())
    .then(vis);

  function vis(data) {
    console.log(data);
    const once = new Set(data.map((elm) => elm.Produktnavn_model));
    once.forEach((element) => {
      ul.innerHTML += `<li>${element}</li>`;
    });
  }
}
