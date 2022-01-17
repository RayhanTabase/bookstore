import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList(props) {
  const { books } = props;
  return (
    <ul className="booksList">
      {books.map((book) => (
        <BookItem key={book.id} />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default BooksList;
