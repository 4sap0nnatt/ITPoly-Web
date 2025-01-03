import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" data-aos="fade-up">
        ติดต่อเรา
      </h1>
      <form>
        <div className="mb-3" data-aos="fade-left">
          <label htmlFor="name" className="form-label">ชื่อ</label>
          <input type="text" id="name" className="form-control" placeholder="ชื่อของคุณ" />
        </div>
        <div className="mb-3" data-aos="fade-left">
          <label htmlFor="email" className="form-label">อีเมล</label>
          <input type="email" id="email" className="form-control" placeholder="อีเมลของคุณ" />
        </div>
        <div className="mb-3" data-aos="fade-left">
          <label htmlFor="message" className="form-label">ข้อความ</label>
          <textarea id="message" className="form-control" rows="4" placeholder="ข้อความของคุณ"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" data-aos="zoom-in">ส่ง</button>
      </form>
    </div>
  );
}

export default Contact;
