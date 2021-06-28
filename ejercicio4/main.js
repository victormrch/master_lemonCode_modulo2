// Crea una función isBookRead que reciba una lista de libros
// y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano.
// En caso de no existir el libro devolver false

function isBookRead(books, titleToSearch) {
  const isRead = books.some((b) => b.title === titleToSearch && b.isRead);
  console.log(isRead);
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

isBookRead(books, "Devastación"); // true, existe y esta leido
isBookRead(books, "Canción de hielo y fuego"); // false, existe pero no está leido.
isBookRead(books, "Los Pilares de la Tierra"); // false, no esta en la lista el libro.
