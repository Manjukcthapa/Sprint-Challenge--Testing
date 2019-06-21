
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: "Pacman", genre: 'Arcade', releaseYear:2000
      },
        {title: "pokamon",  genre: 'Ferro', releaseYear:2390},
        {title: "poker", genre: 'rustal', releaseYear: 2304}
      ]);
    });
};
