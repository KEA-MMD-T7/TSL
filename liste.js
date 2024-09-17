const params = new URLSearchParams(window.location.search);
const kat = params.get("kategori");
window.addEventListener("load", init);

console.log(kat);

let h1, ul;

function init() {
  h2 = document.querySelector("h2");
  h2.textContent = kat;
  ul = document.querySelector("ul");
  hentData();
}

const katUrl = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?Taksonomi_2=eq.${kat}`;

// const options = {
//   headers: {
//     apikey: key,
//   },
// };

function hentData() {
  fetch(katUrl, options)
    .then((res) => res.json())
    .then(vis);
}

function vis(data) {
  h2.textContent = `${kat} (${data.length} stk)`;

  const alle_navne = {};
  ul.textContent = "";
  data.forEach((produkt) => {
    const navn = produkt.Produktnavn_model;
    if (navn) {
      alle_navne[navn] = (alle_navne[navn] || 0) + 1;
    }
  });

  //console.log(alle_navne);
  Object.entries(alle_navne).forEach(([navn, count]) => {
    ul.innerHTML += `<li>${navn} (${count} stk)</li>`;
  });
}
