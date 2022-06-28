"use strict";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  findMovies(respData.results);
}

function findMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview, release_date } = movie;

      if (poster_path == null || overview == "" || release_date == "") {
            return false;
        } else {

          const movieEl = document.createElement("div");
          movieEl.classList.add("movie");

          movieEl.innerHTML = `
                <img
                    src="${IMGPATH + poster_path}"
                    alt="${title}"
                >
                <div class="movieInfo">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h4 id="overview">Overview</h4>
                    ${overview}
                    <h4 id="releaseDate">Release Date</h4>
                    ${release_date}
                </div>
            `;

            main.appendChild(movieEl);

        }

    });
}

function getClassByRate(vote) {
  if (vote >= 7.5) {
      return "green";
  } else if (vote >= 5) {
      return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
})

const contacts = [
  {name: "Teresa",        mail: "teresa.brehm@student.businessschool-berlin.de"},
  {name: "Maurice",       mail: "maurice.carlen@student.businessschool-berlin.de"},
  {name: "Moritz",        mail: "m-m.carrescia@student.businessschool-berlin.de"},
  {name: "Christian D.",  mail: "christian.dicks@student.businessschool-berlin.de"},
  {name: "Vincent",       mail: "vincent.froenicke@student.businessschool-berlin.de"},
  {name: "Freya",         mail: "f-e.goehler@student.businessschool-berlin.de"},
  {name: "Johann",        mail: "johann.heinken@student.businessschool-berlin.de"},
  {name: "Issa",          mail: "daniel-issa.kodjovi@student.businessschool-berlin.de"},
  {name: "Lennart",       mail: "lennart.laugisch@student.businessschool-berlin.de"},
  {name: "Christian M.",  mail: "teresa.brehm@student.businessschool-berlin.de"},
  {name: "Florentine",    mail: "f-e.maerz@student.businessschool-berlin.de"},
  {name: "Henrik",        mail: "henrik.mumm@student.businessschool-berlin.de"},
  {name: "Philipp",       mail: "p-j.nehlsen@student.businessschool-berlin.de"},
  {name: "Klaas",         mail: "klaas-malte.nehus@student.businessschool-berlin.de"},
  {name: "Ilana",         mail: "ilana.neustadt@student.businessschool-berlin.de"},
  {name: "Ibrahim",       mail: "ibrahim.oezdemir@student.businessschool-berlin.de"},
  {name: "Sophie",        mail: "s-m-c-u.pass@student.businessschool-berlin.de"},
  {name: "Niklas",        mail: "n-j.sawitzki@student.businessschool-berlin.de"},
  {name: "Linus",         mail: "linus-daniel.scheibe@student.businessschool-berlin.de"},
  {name: "Danin",         mail: "danin.shayesteh@student.businessschool-berlin.de"},
  {name: "Constantin",    mail: "c.steingraeber@student.businessschool-berlin.de"},
  {name: "Lukas",         mail: "l-f.theel@student.businessschool-berlin.de"},
  {name: "Anne",          mail: "anne.ullrich@student.businessschool-berlin.de"},
]

const section = document.getElementById("contacts");

function findContacts(contacts) {
      section.innerHTML = "";
      contacts.forEach((contacts) => {
        const { name, mail } = contacts;

        const contactsEl = document.createElement("span");
        contactsEl.classList.add("contacts");

        contactsEl.innerHTML = `<a href="mailto:${mail}">${name}</a>`;

        section.appendChild(contactsEl);
        }
      );
}

findContacts(contacts);
