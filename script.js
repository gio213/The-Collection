const card = document.querySelectorAll(".card");

const collection = [
  {
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    picture:
      "https://prod-printler-front-as.azurewebsites.net/media/photo/123308.jpg?mode=pad&width=1200&rnd=0.0.1",
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
];

const renderData = (collection) => {
  card.forEach((card) => {
    const moviePoster = card.querySelector(".moviePoster ");
    const genreP1 = card.querySelector(".p1");
    const genreP2 = card.querySelector(".p2");
    const movieTittle = card.querySelector(".movieTittle h1");
    const movieDirector = card.querySelector(".movieTittle h2");
    const youTubeIcon = card.querySelectorAll(".youtube");
    const spotifyIcon = card.querySelectorAll(".spotify");
    const cardTxt = card.querySelector(".cardTxt p");

    cardTxt.textContent = `Relase year: ${collection[0].releaseYear}, In Roles: ${collection[0].cast}`;

    youTubeIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        window.open(collection[0].youtubeLink);
      });
    });

    spotifyIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        window.open(collection[0].spotifyLink);
      });
    });

    movieDirector.textContent = collection[0].director;
    genreP2.textContent = collection[0].genre[1];
    genreP1.textContent = collection[0].genre[0];
    moviePoster.src = collection[0].picture;
    movieTittle.textContent = collection[0].name;
  });
};

renderData(collection);
