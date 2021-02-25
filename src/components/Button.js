import React from 'react';
import '../button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='createListing'>
      <button className='btn'>Create A Listing</button>
    </Link>
  );
}