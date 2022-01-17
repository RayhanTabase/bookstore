function BookItem() {
  return (
    <li className="booksItem">
      <div className="booksDetails">
        <p>Category</p>
        <h2>Title</h2>
        <p>author</p>

        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>

      </div>
    </li>
  );
}

export default BookItem;
