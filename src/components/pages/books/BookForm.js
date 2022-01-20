import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  addBook, startRequest, requestFailure, requestSuccess,
} from '../../../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const [newbookData, setNewBookData] = useState({
    title: '',
    author: '',
  });

  const { title, author } = newbookData;

  const submitBook = () => async (dispatch) => {
    dispatch(startRequest());
    try {
      const newBook = {
        id: uuidv4(),
        title,
        author,
      };
      const submission = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6i75I2hGz2gRajhxffhE/books',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: newBook.id,
            title: newBook.title,
            category: 'Fiction',
          }),
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        });
      if (submission.status === 201) dispatch(addBook(newBook));
      dispatch(requestSuccess());
    } catch (error) {
      dispatch(requestFailure(error.message));
    }
  };

  const handleChange = (e) => {
    setNewBookData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkEmpty = () => !(title.trim() || author.trim());

  const submitBookToStore = () => {
    if (!checkEmpty()) return dispatch(submitBook());
    return false;
  };

  return (
    <section className="newBookForm">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" placeholder="Title" value={title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={author} onChange={handleChange} />
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
