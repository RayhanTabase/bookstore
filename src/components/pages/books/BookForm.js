import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();

  const [newbookData, setNewBookData] = useState({
    title: '',
    author: '',
  });

  const { title, author } = newbookData;

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setNewBookData({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setNewBookData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="newBookForm">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" placeholder="Book title" value={title} onChange={handleChange} />
        <select placeholder="Category">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
