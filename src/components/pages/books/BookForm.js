import React, { useState } from 'react';

function BookForm() {
  const [formData] = useState({
    title: null,
    category: null,
  });

  const handleChange = () => {
  };

  const { title } = formData;
  return (
    <section className="newBookForm">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" placeholder="Book title" value={title} onChange={handleChange} />
        <select placeholder="Category" defaultValue={null}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
