// Array Operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring

const testArray = ["javascript", "typescript", "c++", "java"];

const head = ([firstElement, ...restElement]) => {
  console.log(firstElement);
  return firstElement;
};

head(testArray);

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Uliza rest operator.

const tail = ([firstElement, ...restElement]) => {
  console.log(restElement);
  return restElement;
};

tail(testArray);

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el úlmo. Uliza los métodos que ofrece
// Array.prototype.

const init = ([...array]) => {
  array.pop();
  console.log(array);
  return array;
};

init(testArray);

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el úlmo elemento.
const last = ([...array]) => {
  console.log(array[array.length - 1]);
  return array[array.length - 1];
};

last(testArray);
