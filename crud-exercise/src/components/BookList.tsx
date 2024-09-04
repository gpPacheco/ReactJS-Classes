import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/api";
import { Link } from "react-router-dom";
interface Book {
  id: string;
  title: string;
  autor: string;
  releaseDate: number;
  genre: string;
  numberOfPages: number;
}
function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };
  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };
  return (
    <div>
      <h1>Book List</h1>
      <Link to="/add">Add Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.autor} - {book.releaseDate} - {book.genre} - {book.numberOfPages} pages
            <Link to={`/edit/${book.id}`}> Edit </Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BookList;