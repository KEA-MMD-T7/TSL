const params = new URLSearchParams(window.location.search);
const kat = params.get("kategori");
window.addEventListener("load", init);

let h1, h2, ul, url, filter, alleAfTypen;

function init() {
  console.log(kat);
  h2 = document.querySelector("h2");
  h2.textContent = kat;
  ul = document.querySelector("ul");
  //encKat = encodeURI(kat);
  url = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?Type=eq.${kat}`;
  hentData(url, bygKatNav);
}

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
  alleAfTypen = data;
  console.log(alleAfTypen);
  const type = new Set(data.map((elm) => elm.Mærke));
  type.forEach((elm) => {
    if (elm != "") {
      let knap = document.createElement("button");
      knap.textContent = elm;
      knap.dataset.mrk = elm;
      knap.addEventListener("click", filtrer);
      document.querySelector("nav").appendChild(knap);
    }
  });
  vis(data);
}

function filtrer() {
  filter = this.dataset.mrk;
  vis(alleAfTypen);
}

function vis(data) {
  console.log(filter);
  h2.textContent = `${kat} (${data.length} stk)`;

  const alle_navne = {};
  ul.textContent = "";
  data.forEach((produkt) => {
    if (produkt.Mærke == filter || !filter) {
      const navn = produkt.Produktnavn_model;
      if (navn) {
        alle_navne[navn] = (alle_navne[navn] || 0) + 1;
      }
    }
  });

  Object.entries(alle_navne).forEach(([navn, count]) => {
    ul.innerHTML += `<li>${navn} (${count} stk)</li>`;
  });
}
