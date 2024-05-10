import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`https://softwium.com/api/books/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch book details');
      }
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setError('Failed to fetch book details. Please try again later.');
    }
  };

  if (error) {
    return <div className='error-details'>{error}</div>;
  }

  if (!book) {
    return <div class="spinner">
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
  </div>;
  }

  return (
    <div className='book-details'>
      <div className='book-details-heading'>{book.title}</div>
      <div className='book-details-content'>
        <table>
            <tr>
                <th>Id : </th>
                <td>{book.id}</td>
            </tr>
            <tr>
                <th>Isbn : </th>
                <td>{book.isbn}</td>
            </tr>
            <tr>
                <th>Pages : </th>
                <td>{book.pageCount}</td>
            </tr>
            <tr>
                <th>Author(s) : </th>
                <td>{book.authors}</td>
            </tr>
        </table>
      </div>
    </div>
  );
}

export default Details;
