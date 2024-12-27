import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#f2f2f2', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>ติดต่อเรา</h2>
          <p>ที่อยู่: วิทยาลัยโปลิเทคนิคลานนา เชียงใหม่</p>
          <p>โทรศัพท์: 053-123-456</p>
          <p>อีเมล: info@lannapoly.ac.th</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;