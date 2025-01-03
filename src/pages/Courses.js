import React from "react";

function Courses() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" data-aos="fade-up">
        หลักสูตรของเรา
      </h1>
      <div className="row">
        <div className="col-md-6" data-aos="flip-left">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ประกาศนียบัตรวิชาชีพ</h5>
              <p className="card-text">เรียนรู้ทักษะพื้นฐานในด้านไอทีและเทคโนโลยี</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="flip-left">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ประกาศนียบัตรวิชาชีพชั้นสูง</h5>
              <p className="card-text">พัฒนาความรู้และเตรียมพร้อมสำหรับการทำงาน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
