import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './BookList';
import About from './About';
import Details from './Details';
import './App.css';
import Logo from './utilities/search.png';

function App(){
  return (
    <div>
      <div className='header'>
          <p>BookShelf Explorer</p>
          <img src={Logo} alt='Logo' />
      </div>
      <div >
          <Router>
            <div className='navbar'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/about'>About</Link>
            </div>
            <div className='main-container'>
            <Routes >
                <Route path='/' element={<BookList />} />
                <Route path='/about' element={<About />} />
                <Route path='/details/:id' element={<Details/>} />
            </Routes>
            </div>
          </Router>
      </div>
      <div className='footer'>
          <p>@contact: bookshelfexplorer@gmail.com</p>
      </div>
    </div>
    
  );
};

export default App;
