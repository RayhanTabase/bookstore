import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();

  const submitBookToStore = (title = 'title', author = 'author') => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <section className="newBookForm">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" placeholder="Book title" />
        <select placeholder="Category" defaultValue={null}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
