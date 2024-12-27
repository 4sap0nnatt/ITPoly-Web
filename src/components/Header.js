import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#004080', color: 'white', padding: '1rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>สาขาเทคโนโลยีสารสนเทศ</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;