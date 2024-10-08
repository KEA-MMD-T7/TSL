const q1 = "Mærke";
const q2 = "GoPro";
const q3 = "lammel";

//const url = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL?${q1}=eq.${q2}&select=${q1}`;

const url = "https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/TSL";

//const url = `https://jftyavgnjvzhcjchqdpg.supabase.co/rest/v1/test1?kategorier=cs.["${q3}"]`;

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(bygKatNav);

function bygKatNav(data) {
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
