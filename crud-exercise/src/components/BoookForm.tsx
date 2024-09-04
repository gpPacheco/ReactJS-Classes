import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBookById, updateBook } from "../services/api";
interface Book {
  title: string;
  autor: string;
  releaseDate: number;
  genre: string;
  numberOfPages: number;
}
function BookForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    title: "",
    autor: "",
    releaseDate: 0,
    genre: "",
    numberOfPages: 0,
  });
  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);
  const loadBook = async () => {
    try {
      const response = await getBookById(id as string);
      setBook(response.data);
    } catch (error) {
      console.error("Error loading book data", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateBook(id, book);
      } else {
        await createBook(book);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving book", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Autor</label>
        <input
          type="text"
          name="autor"
          value={book.autor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>ReleaseDate</label>
        <input
          type="number"
          name="releaseDate"
          value={book.releaseDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>NumberOfPages</label>
        <input
          type="number"
          name="numberOfPages"
          value={book.numberOfPages}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
export default BookForm;