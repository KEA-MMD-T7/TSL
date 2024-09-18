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
  const enAfHvertType = new Set(data.map((elm) => elm.Type));
  enAfHvertType.forEach((type) => {
    if (type != "") {
      let link = document.createElement("a");
      link.textContent = type;
      link.href = `liste.html?type=${type}`;
      document.querySelector("nav").appendChild(link);
    }
  });
}

hentKats();
