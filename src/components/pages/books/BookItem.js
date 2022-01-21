import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  removeBook, startRequest, requestFailure, requestSuccess,
} from '../../../redux/books/books';

import BooksDetails from './BookDetails';
import BookProgress from './BookProgress';
import CurrentChapter from './CurrentChapter';

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
      <BooksDetails
        category={category}
        title={title}
        removeBookFromStore={removeBookFromStore}
      />
      <BookProgress />
      <CurrentChapter />
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
