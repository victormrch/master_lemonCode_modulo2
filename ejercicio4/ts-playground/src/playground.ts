interface Books {
  title: string;
  isRead: boolean;
}
const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Books[], titleToSearch: string) {
  const bookIsRead = books.some(
    (book) => book.title === titleToSearch && book.isRead
  );
  console.log(bookIsRead);
}

isBookRead(books, "Devastación"); // true, existe y esta leido
isBookRead(books, "Canción de hielo y fuego"); // false, existe pero no está leido.
isBookRead(books, "Los Pilares de la Tierra"); // false, no esta en la lista el libro.
