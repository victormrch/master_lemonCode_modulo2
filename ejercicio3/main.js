// Implementa una función clone que, a partir de un objeto de entrada source
//  devuelva un nuevo objeto con las propiedades de source:

const source = {
  name: "Lebron James",
  age: 36,
};

function clone(source) {
  const properties = Object.keys({ ...source });
  console.log(properties);
  return properties;
}

clone(source);

// Implementa una función merge que, dados dos objetos de entrada source y target,
// devuelva un nuevo objeto con todas las propiedades de target y de source,
//  y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true, gen: "Female" };

function merge(source, target) {
  const newObj = { ...target, ...source };
  console.log(newObj);
}

merge(a, b);
