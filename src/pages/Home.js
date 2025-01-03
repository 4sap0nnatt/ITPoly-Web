import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaChalkboardTeacher, FaAward, FaHandsHelping } from "react-icons/fa";

function Home() {
  return (
    <div>
      {/* ส่วนที่ 1: ข้อมูลทั่วไปของสาขา */}
      <div className="bg-light text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-4">ยินดีต้อนรับทุกท่านเข้าสู่</h1>
          <p className="lead">
            สาขาเทคโนโลยีสารสนเทศของวิทยาลัยโปลิเทคนิคลานนา มุ่งพัฒนาผู้เรียนให้มีทักษะที่ทันสมัยใน
            ด้านเทคโนโลยีสารสนเทศ การเรียนการสอนของเราครอบคลุมทั้งด้านทฤษฎีและปฏิบัติ พร้อมให้
            ความรู้และทักษะที่จำเป็นสำหรับการทำงานในโลกยุคดิจิทัล
          </p>
          <Button variant="primary" size="lg" href="#about">
            เรียนรู้เพิ่มเติม
          </Button>
        </div>
      </div>

      {/* ส่วนที่ 2: รวมภาพประกอบกิจกรรมที่เกี่ยวข้อง */}
      <div className="container my-5" data-aos="fade-left">
        <h2 className="mb-4">กิจกรรมที่เกี่ยวข้อง</h2>
        <Row>
          <Col md={4} data-aos="fade-up">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>การแข่งขันทักษะทางวิชาชีพ</Card.Title>
                <Card.Text>เตรียมตัวสำหรับการแข่งขันระดับชาติที่จะจัดขึ้นเร็ว ๆ นี้</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>งาน Open House</Card.Title>
                <Card.Text>เชิญชวนทุกท่านร่วมเยี่ยมชมหลักสูตรและกิจกรรมของเรา</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} data-aos="fade-up">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>การประชุมวิชาการ</Card.Title>
                <Card.Text>เข้าร่วมการประชุมทางวิชาการเพื่อแลกเปลี่ยนความรู้กับผู้เชี่ยวชาญ</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* ส่วนที่ 3: ข้อความต้อนรับ และปรัชญาของสาขา */}
      <div className="bg-dark text-white text-center py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="display-4">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h2>
          <p className="lead">
            "การศึกษาเป็นเครื่องมือสำคัญในการเปลี่ยนแปลงโลก และภาควิชาเทคโนโลยีสารสนเทศของเรา
            ยินดีต้อนรับทุกท่านที่ต้องการเข้ามาสร้างสรรค์นวัตกรรมใหม่ๆ และพัฒนาเทคโนโลยีในยุคดิจิทัล"
          </p>
          <Row>
            <Col md={4} data-aos="flip-up">
              <div className="text-center">
                <FaChalkboardTeacher size={60} />
                <h4>การเรียนรู้ที่ทันสมัย</h4>
                <p>เรียนรู้เทคโนโลยีใหม่ๆ ด้วยวิธีการสอนที่ทันสมัย</p>
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="text-center">
                <FaAward size={60} />
                <h4>การพัฒนาทักษะ</h4>
                <p>พัฒนาทักษะที่จำเป็นสำหรับการทำงานในอุตสาหกรรม</p>
              </div>
            </Col>
            <Col md={4} data-aos="flip-up">
              <div className="text-center">
                <FaHandsHelping size={60} />
                <h4>การทำงานร่วมกัน</h4>
                <p>สร้างสรรค์การทำงานที่เน้นความร่วมมือกับภาคอุตสาหกรรม</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
