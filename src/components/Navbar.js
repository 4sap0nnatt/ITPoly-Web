import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', padding: 0 }}>
        <li><a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>หน้าหลัก</a></li>
        <li><a href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>เกี่ยวกับเรา</a></li>
        <li><a href="/courses" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>หลักสูตร</a></li>
        <li><a href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>ติดต่อเรา</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;