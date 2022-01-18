import React, { useState } from 'react';
import store from '../../../redux/configureStore';
import BookItem from './BookItem';

function BooksList() {
  const { booksReducer: books } = store.getState();
  const [booksList, setBooksList] = useState([...books]);

  store.subscribe(async () => {
    const { booksReducer: books } = await store.getState();
    setBooksList(books);
  });

  return (
    <ul className="booksList">
      {booksList.map((book) => (
        <BookItem key={book.id} id={book.id} />
      ))}
    </ul>
  );
}

export default BooksList;
