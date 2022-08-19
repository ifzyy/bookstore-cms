import React from 'react';
import InputBooks from './Inputbooks';
import { removeBook } from '../redux/Book/Book';

function Books() {
  return (
    <div className="mainBookContainer">
      <InputBooks />
      <button onClick={removeBook} type="button">Delete</button>
    </div>
  );
}

export default Books;
