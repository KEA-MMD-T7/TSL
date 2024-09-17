const url = "https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL";

const options = {
  headers: {
    apikey: key,
  },
};

function hentKats() {
  fetch(url, options)
    .then((res) => res.json())
    .then(bygKatNav);
}

function bygKatNav(data) {
  const katOnce = new Set(data.map((elm) => elm.Taksonomi_1));
  katOnce.forEach((kat) => {
    if (kat != "") {
      let knap = document.createElement("a");
      knap.textContent = kat;
      knap.href = `liste.html?kategori=${kat}`;
      document.querySelector("nav").appendChild(knap);
    }
  });
}

hentKats();
