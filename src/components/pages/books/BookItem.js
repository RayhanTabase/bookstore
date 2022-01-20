import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  removeBook, startRequest, requestFailure, requestSuccess,
} from '../../../redux/books/books';

function BookItem(props) {
  const dispatch = useDispatch();
  const { id, title, category } = props;

  const deleteBook = () => async (dispatch) => {
    dispatch(startRequest());
    try {
      const submission = await fetch(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6i75I2hGz2gRajhxffhE/books/${id}`,
        {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
      );
      if (submission.status === 201) dispatch(removeBook(id));
      dispatch(requestSuccess());
    } catch (error) {
      dispatch(requestFailure(error.message));
    }
  };

  const removeBookFromStore = () => {
    dispatch(deleteBook());
  };

  return (
    <li className="booksItem">
      <div className="booksDetails">
        <p>{category}</p>
        <h2>{title}</h2>

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
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
