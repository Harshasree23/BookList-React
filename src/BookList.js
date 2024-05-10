import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookImg from './utilities/open-book.png';
import SearchIng from './utilities/search_FILL0.png';
import Error from './utilities/error.png';

function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://softwium.com/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data); 
      setLoading(false); // Update loading state when data is fetched
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Failed to fetch books. Please try again later.');
      setLoading(false); // Update loading state on error
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className='list'>
      <div className='book-list-heading'>
        <div className='book-list-title'>
          <h2>Search for the book</h2>
          <img className='book-icon' src={BookImg} alt='a book'/>
        </div>
        <div className='book-list-search'>
          <img className='search-icon' src={SearchIng} alt='search icon'/>
          <input
            className='input_search'
            type='text'
            placeholder='Search by book title...'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>  
      {error && <p>{error}</p>}
      {loading ? ( 
      <div className='spinner-container'>
        <div class="spinner">
          <div></div>   
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
          <div></div>    
        </div>
      </div>
      ) : filteredBooks.length > 0 ? (
        <ul className='booknames'>
          {filteredBooks.map((book, index) => (
            <li key={index}>
              <Link className='book' to={`/details/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className='not-found'>
          <img src={Error} alt='error img' />
          <p>No books found with the given name. Please check for typo if any...</p>
        </div>
      )}
    </div>
  );
}

export default BookList;
