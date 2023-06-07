const body = document.querySelector("body");
const search = document.querySelector(".searchInput");
const section = document.querySelector("section");
const themeSwitcher = document.querySelector(".themeSwitcher");
const themeSwitchBtn = document.getElementById("themeChanger");
const themeName = document.querySelector(".colorChangeBtnTxt h1");
const setTheme = (theme) => (document.documentElement.className = theme);
themeSwitchBtn.addEventListener("change", function () {
  if (themeSwitchBtn.checked) {
    setTheme("dark");
    themeName.innerHTML = "Dark";
  } else {
    setTheme("light");
    themeName.innerHTML = "Light";
    return themeSwitchBtn;
  }
});

const collection = [
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    picture:
      "https://bestclassicbands.com/wp-content/uploads/2015/11/Pulp-Fiction-Dance-Scene.jpg",
    genre: ["Crime", "Drama"],
    cast: [
      "John Travolta",
      "Samuel L Jackson",
      "Uma Thurman",
      "Amanda Plummer",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Ik-RsDGPI5Y",
    spotifyLink:
      "https://open.spotify.com/track/7xmW8gsZgihBHkjHA3U8l7?si=b34f82c9bb6142d8",
  },
  {
    name: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    picture:
      "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
    genre: ["Crime", "Drama"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    youtubeLink: "https://www.youtube.com/watch?v=sY1S34973zA",
    spotifyLink:
      "https://open.spotify.com/track/4CeVXUIgqGpmPQRqbmJwP2?si=db462829b19747c9",
  },
  {
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    picture:
      "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_102/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/4/d/4d4fdb96ea3259007d1a0b3dbf64398b58886d89/20-facts-might-know-shawshank-redemption.jpg",
    genre: ["Drama", "Crime"],
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    youtubeLink: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    spotifyLink:
      "https://open.spotify.com/track/5oyzBv2NcnLzVQKVf24CYr?si=ba26514963094ed5",
  },
  {
    name: "One Flew Over the Cuckoo's Nest",
    director: "Milos Forman",
    releaseYear: 1975,
    picture:
      "https://m.media-amazon.com/images/M/MV5BMTU4OTI5NjQ1OF5BMl5BanBnXkFtZTgwMDI1MTUxNTM@._V1_.jpg",
    genre: ["Drama", "Comedy"],
    cast: ["Jack Nicholson", "Louise Fletcher", "Will Sampson", "Brad Dourif"],
    youtubeLink: "https://www.youtube.com/watch?v=2WSyJgydTsA",
    spotifyLink:
      "https://open.spotify.com/track/0VwTeYNjcl30DyQlt3GPe0?si=4adab85f362c449e",
  },
  {
    name: "The Green Mile",
    director: "Frank Darabont",
    releaseYear: 1999,
    picture:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genre: ["Drama", "Crime"],
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "Bonnie Hunt"],
    youtubeLink: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
    spotifyLink:
      "https://open.spotify.com/track/2ARw4obh0Ym3sVvdYtuFw0?si=1043dbeaa73047fa",
  },
];

const createCard = (number) => {
  const section = document.querySelector("section");
  body.appendChild(section);
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  section.appendChild(card);
  const cardImageDiv = document.createElement("div");
  cardImageDiv.setAttribute("class", "cardImg");
  card.appendChild(cardImageDiv);
  const cardImg = document.createElement("img");
  cardImg.setAttribute("class", "moviePoster");
  cardImageDiv.appendChild(cardImg);
  const genreDiv = document.createElement("div");
  genreDiv.setAttribute("class", "genre");
  card.appendChild(genreDiv);
  const spanP1 = document.createElement("span");
  spanP1.setAttribute("class", "p1");
  genreDiv.appendChild(spanP1);
  const spanP2 = document.createElement("span");
  spanP2.setAttribute("class", "p2");
  genreDiv.appendChild(spanP2);
  const movieTittleDiv = document.createElement("div");
  movieTittleDiv.setAttribute("class", "movieTittle");
  card.appendChild(movieTittleDiv);
  const movieTittle = document.createElement("h1");

  movieTittleDiv.appendChild(movieTittle);
  const movieDirectorDiv = document.createElement("h2");
  movieTittleDiv.appendChild(movieDirectorDiv);
  const cardTxtDiv = document.createElement("div");
  cardTxtDiv.setAttribute("class", "cardTxt");
  card.appendChild(cardTxtDiv);
  const cardTxt = document.createElement("p");
  cardTxtDiv.appendChild(cardTxt);
  const line = document.createElement("div");
  line.setAttribute("class", "line");
  card.appendChild(line);
  const youtubeSpotifyDiv = document.createElement("div");
  youtubeSpotifyDiv.setAttribute("class", "youtubeSpotifyDiv");
  card.appendChild(youtubeSpotifyDiv);
  const youtubeIcon = document.createElement("img");
  youtubeIcon.setAttribute("class", "youtubeIcon");
  youtubeIcon.src = "/imgs/youtube-icon.png";
  youtubeSpotifyDiv.appendChild(youtubeIcon);
  const spotifyIcon = document.createElement("img");
  spotifyIcon.setAttribute("class", "spotifyIcon");

  spotifyIcon.src = "/imgs/spotify-icon.png";
  youtubeSpotifyDiv.appendChild(spotifyIcon);
  youtubeIcon.addEventListener("click", () => {
    window.open(collection[number].youtubeLink);
  });
  spotifyIcon.addEventListener("click", () => {
    window.open(collection[number].spotifyLink);
  });

  cardImg.src = collection[number].picture;
  spanP1.innerHTML = collection[number].genre[0];
  spanP2.innerHTML = collection[number].genre[1];
  movieTittle.innerHTML = collection[number].name;
  movieDirectorDiv.innerHTML = collection[number].director;
  cardTxt.innerHTML = `Relase year: ${collection[number].releaseYear} <br> Cast: ${collection[number].cast}`;
};

search.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMovies = collection.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(searchString) ||
      movie.genre[0].toLowerCase().includes(searchString) ||
      movie.genre[1].toLowerCase().includes(searchString) ||
      movie.director.toLowerCase().includes(searchString) ||
      movie.cast[0].toLowerCase().includes(searchString) ||
      movie.cast[1].toLowerCase().includes(searchString) ||
      movie.cast[2].toLowerCase().includes(searchString) ||
      movie.cast[3].toLowerCase().includes(searchString)
    );
  });
  section.innerHTML = "";
  filteredMovies.forEach((movie) => {
    createCard(collection.indexOf(movie));

    if (searchString === "") {
      section.innerHTML = "";
      createCard(0);
      createCard(1);
      createCard(2);
      createCard(3);
      createCard(4);
      createCard(1);
      createCard(3);
      createCard(4);
    }
  });
});

createCard(0);
createCard(1);
createCard(2);
createCard(3);
createCard(4);
createCard(1);
createCard(3);
createCard(4);
