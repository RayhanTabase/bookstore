import './Books.css';
import BookForm from './BookForm';
import BooksList from './BooksList';

function Books() {
  return (
    <section className="booksPage">
      <BooksList />
      <BookForm />
    </section>
  );
}

export default Books;
