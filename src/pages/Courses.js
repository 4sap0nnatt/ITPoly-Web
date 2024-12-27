import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Courses = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>หลักสูตร</h2>
          <ul style={{ listStyle: 'square', marginLeft: '1.5rem' }}>
            <li>หลักสูตรปริญญาตรี</li>
            <li>หลักสูตรประกาศนียบัตรวิชาชีพ</li>
            <li>หลักสูตรระยะสั้น</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Courses;