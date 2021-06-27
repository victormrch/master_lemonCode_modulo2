// Implementa una función last (inmutable), tal que,
// dado un array como entrada devuelva el último elemento.

const films = [
  "A New Hope",
  "Empire Strikes Back",
  "Return of the Jedi",
  "The Phantom Menace",
  "Attack of the Clones",
  "Revenge of the Sith",
  "The Force Awakens",
  "The Last Jedi",
  "The Rise of Skywalker",
];

const actors = [
  "Luke Skywalker",
  "Leia Organa",
  "Han Solo",
  "Ben Kenobi",
  "Chewbacca",
  "C3PO",
  "R2D2",
  "Darth Vader",
  "Yoda",
];

const years = [1977, 1980, 1983, 1999, 2002, 2005, 2015, 2017, 2019];

const concat = (a, b) => {
  const newArray = [...a, ...b];
  console.log(newArray);
  return newArray;
};

concat(films, actors);

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten
// múltiples arrays de entrada (más de 2)

const starWarsUniverse = (...args) => {
  const newArray = [].concat(...args);
  console.log(newArray);
  return newArray;
};

starWarsUniverse(films, actors, years);
