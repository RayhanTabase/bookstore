import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/books';

function BookItem(props) {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    const { id } = props;
    dispatch(removeBook(id));
  };

  return (
    <li className="booksItem">
      <div className="booksDetails">
        <p>Category</p>
        <h2>Title</h2>
        <p>author</p>

        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookFromStore}>Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookItem;
