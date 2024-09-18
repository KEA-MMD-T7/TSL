const params = new URLSearchParams(window.location.search);
const kat = params.get("kategori");
window.addEventListener("load", init);

console.log(kat);

let h1, h2, ul;

function init() {
  h2 = document.querySelector("h2");
  h2.textContent = kat;
  ul = document.querySelector("ul");
  hentData(url, bygKatNav);
}

const url = "https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL";

const options = {
  headers: {
    apikey: key,
  },
};

function hentData(url, funkt) {
  console.log(url);
  fetch(url, options)
    .then((res) => res.json())
    .then(funkt);
}

function bygKatNav(data) {
  const type = new Set(data.map((elm) => elm.Taksonomi_1));
  type.forEach((elm) => {
    if (elm != "") {
      let knap = document.createElement("button");
      knap.textContent = elm;
      const url = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?Taksonomi_1=eq.${elm}&Type=eq.${kat}`;
      const nyUrl = encodeURI(url);
      knap.addEventListener("click", () => hentData(nyUrl, vis));
      //knap.href = `liste.html?kategori=${elm}`;
      document.querySelector("nav").appendChild(knap);
    }
  });
}

function vis(data) {
  h2.textContent = `${kat} (${data.length} stk)`;

  const alle_navne = {};
  ul.textContent = "";
  data.forEach((produkt) => {
    console.log(produkt, alle_navne);
    const navn = produkt.Produktnavn_model;
    if (navn) {
      alle_navne[navn] = (alle_navne[navn] || 0) + 1;
    }
  });

  Object.entries(alle_navne).forEach(([navn, count]) => {
    ul.innerHTML += `<li>${navn} (${count} stk)</li>`;
  });
}
