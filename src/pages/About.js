import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaUniversity, FaVision } from "react-icons/fa";

function About() {
  return (
    <div>
      {/* ส่วนที่ 1: แนะนำวิทยาลัย */}
      <div className="bg-light text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-4">เกี่ยวกับวิทยาลัยโปลิเทคนิคลานนา</h1>
          <p className="lead">
            วิทยาลัยโปลิเทคนิคลานนา ตั้งอยู่ในจังหวัดเชียงใหม่ ซึ่งเป็นสถาบันการศึกษาที่มุ่งเน้นการ
            พัฒนาผู้เรียนให้มีทักษะและความรู้ในด้านวิชาชีพต่างๆ เพื่อตอบสนองความต้องการของตลาดแรงงาน
            และสังคมในยุคดิจิทัล
          </p>
          <Row>
            <Col md={6} data-aos="fade-right">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>วิทยาลัยโปลิเทคนิคลานนา</Card.Title>
                  <Card.Text>
                    วิทยาลัยของเรามีความมุ่งมั่นในการให้ความรู้ที่ทันสมัย มีอาจารย์ผู้เชี่ยวชาญใน
                    ทุกสาขา และการเรียนการสอนที่เน้นการปฏิบัติจริง ซึ่งทำให้ผู้เรียนสามารถนำความรู้ไป
                    ประยุกต์ใช้ในการทำงานได้จริง
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} data-aos="fade-left">
              <div className="text-center">
                <FaUniversity size={60} color="#ffc107" />
                <h4>สถาบันการศึกษาชั้นนำ</h4>
                <p>พัฒนาเทคโนโลยีและทักษะด้านต่างๆ ให้กับนักศึกษา เพื่ออนาคตที่มั่นคง</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* ส่วนที่ 2: วิสัยทัศน์และเป้าหมายของสาขา */}
      <div className="bg-dark text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="display-4">วิสัยทัศน์และเป้าหมายของสาขา</h2>
          <p className="lead">
            สาขาเทคโนโลยีสารสนเทศของเรามีวิสัยทัศน์ในการพัฒนานักศึกษาที่มีความเชี่ยวชาญในด้าน
            เทคโนโลยีสารสนเทศ พร้อมทั้งสามารถนำทักษะที่เรียนรู้ไปใช้ในอุตสาหกรรมและโลกการทำงานได้จริง
            โดยมีเป้าหมายเพื่อผลิตผู้เชี่ยวชาญที่สามารถปรับตัวและนำเทคโนโลยีใหม่ๆ มาปรับใช้ในงานของตนได้
          </p>
          <Row>
            <Col md={6} data-aos="fade-up">
              <div className="text-center">
                <FaVision size={60} color="#ffc107" />
                <h4>วิสัยทัศน์</h4>
                <p>
                  "เป็นผู้นำด้านการศึกษาด้านเทคโนโลยีสารสนเทศ โดยมุ่งพัฒนาให้ผู้เรียนมีทักษะและความรู้ที่
                  ทันสมัย สอดคล้องกับความต้องการของตลาดแรงงาน"
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-up">
              <div className="text-center">
                <FaUniversity size={60} color="#ffc107" />
                <h4>เป้าหมาย</h4>
                <p>
                  "พัฒนาผู้เรียนให้มีทักษะทั้งด้านทฤษฎีและปฏิบัติ เพื่อให้พร้อมทำงานในอุตสาหกรรมเทคโนโลยีสารสนเทศ
                  พร้อมส่งเสริมการสร้างนวัตกรรมและคิดสร้างสรรค์"
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;
