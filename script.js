const url = "https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?select=*";

const options = {
  headers: {
    apikey: key,
  },
};

function hentData() {
  fetch(url, options)
    .then((res) => res.json())
    .then(bygKatNav);
}

function bygKatNav(data) {
  console.log(data);
  const type = new Set(data.map((elm) => elm.Type));
  type.forEach((elm) => {
    if (elm != "") {
      let knap = document.createElement("a");
      knap.textContent = elm;
      knap.href = `liste.html?kategori=${elm}`;
      document.querySelector("nav").appendChild(knap);
    }
  });
}

hentData();
