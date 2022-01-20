const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const START_REQUEST = 'START_REQUEST';
const GET_CURRENT_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const startRequest = () => ({
  type: START_REQUEST,
});

export const getCurrentBookSuccess = (payload) => ({
  type: GET_CURRENT_BOOKS_SUCCESS,
  payload,
});

export const requestFailure = (payload) => ({
  type: REQUEST_FAILURE,
  payload,
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case START_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CURRENT_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: `${action.payload}`,
      };

    default:
      return state;
  }
};

export default reducer;
