import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startRequest, getCurrentBookSuccess, requestFailure } from '../../../redux/books/books';

import store from '../../../redux/configureStore';
import BookItem from './BookItem';

const ERROR = new Error('Something went wrong');

function BooksList() {
  const dispatch = useDispatch();
  const [booksList, setBooksList] = useState([]);

  const getBooks = () => async (dispatch) => {
    dispatch(startRequest);
    try {
      const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6i75I2hGz2gRajhxffhE/books');
      if (response.ok) {
        let books = await response.json();
        books = Object.entries(books).map(([id, book]) => ({
          id,
          title: book[0].title,
          category: book[0].category,
        }));
        dispatch(getCurrentBookSuccess(books));
      } else throw (ERROR);
    } catch (error) {
      dispatch(requestFailure(error.message));
    }
  };

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  store.subscribe(() => {
    const { booksReducer } = store.getState();
    const { books, loading } = booksReducer;
    if (!loading) setBooksList(books);
  });

  return (
    <ul className="booksList">
      {booksList.map((book) => (
        <BookItem key={book.id} id={book.id} title={book.title} category={book.category} />
      ))}
    </ul>
  );
}

export default BooksList;
