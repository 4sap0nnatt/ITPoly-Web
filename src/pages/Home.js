export default Home;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#f9f9f9', textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h2>
          <p>เรียนรู้เทคโนโลยีที่ก้าวล้ำกับเรา</p>
        </div>
      </main>
      <Footer />
    </>
  );
};