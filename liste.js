const params = new URLSearchParams(window.location.search);
const kat = params.get("kat");
window.addEventListener("load", init);

let h1, ul;

function init() {
  h1 = document.querySelector("h1");
  h1.textContent = kat;
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
    //console.log(data.length);
    h1.textContent += ` (${data.length} stk)`;
    console.log(data);

    let navne = [];
    let antal = 1;
    data.forEach((row) => {
      if (!navne.includes(row.Produktnavn_model)) {
        navne.push(row.Produktnavn_model);
        ul.innerHTML += `<li>${row.Produktnavn_model} ()</li>`;
      }
    });

    // const once = new Set(data.map((elm) => elm.Produktnavn_model));
    // console.log(once);
    // once.forEach((element) => {
    // });
  }
}
