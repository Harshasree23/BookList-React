import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './BookList';
import About from './About';
import Details from './Details';
import './App.css';

function App() {
  
  return (
    <Router>
      <div>
        <div className='header'>
          <div className='heading'>
            <p>BookShelf Explorer</p>
          </div>
              <div className='navbar'>
                  <Link className='links' to='/'>Home</Link>
                  <Link className='links' to='/about'>About</Link>
               </div> 
        </div>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={<BookList />}  />
            <Route path='/about' element={<About />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </div>
      </div>
    <footer>
      <p>Contact Us : BookShelfexplorer@gmail.com</p>
    </footer>
    </Router>
  );
}

export default App;
