import PropTypes from 'prop-types';

function BooksDetails(props) {
  const { title, category, removeBookFromStore } = props;
  return (
    <div className="booksDetails">
      <div className="details">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>Author</p>
      </div>
      <div className="editButtons">
        <button type="button">Comments</button>
        <button type="button" onClick={removeBookFromStore}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
}

BooksDetails.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookFromStore: PropTypes.func.isRequired,
};

export default BooksDetails;
