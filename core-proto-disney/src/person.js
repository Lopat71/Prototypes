/**
 * Человек.
 * @param {string} name
 */
function Person(name) {
  this.name = name;
  this.watchedMovies = [];
  this.watchedMovies.toString = function () {
    return this.map((title, index) => `${index + 1} ${title}`).join(",");
  };
}

Person.prototype.watchMovie = function (movie) {
  if (this.watchedMovies.includes(movie.title)) {
    console.log(`You've already watched "${movie.title}"`);
    return;
  }

  this.watchedMovies.push(movie.title);
  console.log(movie.play());
};

module.exports = { Person };
