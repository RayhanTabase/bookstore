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
    category: '',
  });

  const { title, category } = newbookData;

  const submitBook = () => async (dispatch) => {
    dispatch(startRequest());
    try {
      const newBook = {
        id: uuidv4(),
        title,
        category,
      };
      const submission = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6i75I2hGz2gRajhxffhE/books',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: newBook.id,
            title: newBook.title,
            category: newBook.category,
          }),
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
        });
      if (submission.status === 201) {
        dispatch(addBook(newBook));
        // Reset state values
        setNewBookData({
          title: '',
          category: '',
        });
      }
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

  const checkEmpty = () => !(title.trim() || category.trim());

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (!checkEmpty()) return dispatch(submitBook());
    return false;
  };

  const categories = ['fiction', 'action', 'comedy', 'romance'];

  return (
    <section className="newBookForm">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input name="title" placeholder="Book title" value={title} onChange={handleChange} required />
        <select name="category" className={category === '' ? 'defaultCategoryTitle' : ''} value={category} onChange={handleChange} required>
          <option value="" disabled className="defaultCategoryTitle">Category </option>
          {categories.map((category) => (
            <option key={category} value={category} className="showBold">{category.toUpperCase()}</option>
          ))}
        </select>
        <button type="submit">ADD A BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
