import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import './Doctors.css';

// Generate dummy doctor data
const generateDoctors = () => {
  const specialties = [
    'General Dentistry', 'Orthodontics', 'Pediatric Dentistry', 
    'Oral Surgery', 'Periodontics', 'Endodontics', 'Prosthodontics'
  ];
  
  const doctors = [];
  
  for (let i = 1; i <= 24; i++) {
    doctors.push({
      id: i,
      name: `Dr. ${['Anika', 'Michael', 'Sarah', 'David', 'Emily', 'James', 'Lisa', 'Robert'][i % 8]} ${['Rahman', 'Chen', 'Johnson', 'Wilson', 'Davis', 'Brown', 'Taylor', 'Miller'][i % 8]}`,
      email: `dr.${['anika', 'michael', 'sarah', 'david', 'emily', 'james', 'lisa', 'robert'][i % 8]}${i}@dentistbooking.com`,
      specialty: specialties[i % specialties.length],
      experience: `${5 + (i % 15)} years`,
      image: `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`,
      bio: `Specialized in ${specialties[i % specialties.length]} with extensive experience in modern dental procedures.`
    });
  }
  
  return doctors;
};

const doctorsData = generateDoctors();

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

  // Get current doctors
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container className="doctors-page">
      <Row className="justify-content-center">
        <Col>
          <h2 className="page-title text-center">Our Expert Dentists</h2>
          <p className="page-subtitle text-center">
            Meet our team of professional and experienced dentists dedicated to your smile
          </p>
        </Col>
      </Row>

      <Row className="doctors-list">
        {currentDoctors.map(doctor => (
          <Col key={doctor.id} lg={4} md={6} className="mb-4">
            <Card className="doctor-card h-100">
              <div className="doctor-image-container">
                <Card.Img 
                  variant="top" 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="doctor-image"
                />
                <div className="doctor-specialty-badge">
                  {doctor.specialty}
                </div>
              </div>
              
              <Card.Body className="d-flex flex-column">
                <Card.Title className="doctor-name">{doctor.name}</Card.Title>
                <Card.Subtitle className="doctor-experience mb-2">
                  {doctor.experience} experience
                </Card.Subtitle>
                
                <div className="doctor-contact mb-3">
                  <div className="doctor-email">
                    <span className="contact-icon">📧</span>
                    <a href={`mailto:${doctor.email}`} className="email-link">
                      {doctor.email}
                    </a>
                  </div>
                </div>
                
                <Card.Text className="doctor-bio flex-grow-1">
                  {doctor.bio}
                </Card.Text>
                
                <Button variant="primary" className="mt-auto">
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Pagination>
              <Pagination.First 
                onClick={() => handlePageChange(1)} 
                disabled={currentPage === 1}
              />
              <Pagination.Prev 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
              />
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <Pagination.Item
                  key={number}
                  active={number === currentPage}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </Pagination.Item>
              ))}
              
              <Pagination.Next 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
              />
              <Pagination.Last 
                onClick={() => handlePageChange(totalPages)} 
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Doctors;