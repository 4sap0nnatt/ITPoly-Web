import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#f2f2f2', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>เกี่ยวกับเรา</h2>
          <p>สาขาเทคโนโลยีสารสนเทศเป็นผู้นำด้านการศึกษาและการพัฒนาทักษะไอที</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;