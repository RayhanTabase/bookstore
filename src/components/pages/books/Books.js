import './Books.css';

import BookForm from './BookForm';
import BooksList from './BooksList';

const mockBooksList = [
  {
    id: '1',
    author: 'a',
  },
  {
    id: '2',
    author: 'a',
  },
  {
    id: '3',
    author: 'a',
  },
];

function Books() {
  return (
    <section className="booksPage">
      <BooksList books={mockBooksList} />
      <BookForm />
    </section>
  );
}

export default Books;
