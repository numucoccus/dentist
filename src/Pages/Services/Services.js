import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('2024-07-05');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    'Teeth Cleaning',
    'Dental Checkup',
    'Teeth Whitening',
    'Tooth Filling',
    'Root Canal',
    'Dental Crown'
  ];

  const doctors = [
    'Dr. Anika Rahman',
    'Dr. Michael Chen',
    'Dr. Sarah Johnson',
    'Dr. David Wilson',
    'Dr. Emily Davis'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleBooking = () => {
    if (!selectedService || !selectedDoctor || !selectedTime) {
      alert('Please select service, doctor, and time');
      return;
    }
    
    const bookingDetails = {
      service: selectedService,
      doctor: selectedDoctor,
      date: 'July 5, 2024',
      time: selectedTime
    };
    
    alert(`Appointment Booked Successfully!\n\nService: ${bookingDetails.service}\nDoctor: ${bookingDetails.doctor}\nDate: ${bookingDetails.date}\nTime: ${bookingDetails.time}`);
  };

  // Fixed calendar data for July 2024 (starts on Monday)
  const calendarWeeks = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null]
  ];

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <Container className="services-page">
      <Row className="justify-content-center">
        <Col>
          <h2 className="page-title text-center">Book an Appointment</h2>
        </Col>
      </Row>

      <Row className="justify-content-center booking-form">
        <Col xl={10}>
          <Row>
            <Col lg={6}>
              <Card className="form-card">
                <Card.Body>
                  <div className="form-group">
                    <label className="form-label">Service</label>
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="form-select-custom"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Doctor</label>
                    <select 
                      value={selectedDoctor} 
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="form-select-custom"
                    >
                      <option value="">Select a doctor</option>
                      {doctors.map(doctor => (
                        <option key={doctor} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>

                  <div className="calendar-section">
                    <h5 className="text-center">July 2024</h5>
                    <div className="calendar">
                      <div className="calendar-header">
                        {weekDays.map(day => (
                          <div key={day} className="calendar-day-header">{day}</div>
                        ))}
                      </div>
                      
                      <div className="calendar-body">
                        {calendarWeeks.map((week, weekIndex) => (
                          <React.Fragment key={weekIndex}>
                            {week.map((day, dayIndex) => (
                              <div 
                                key={`${weekIndex}-${dayIndex}`}
                                className={`calendar-day ${day === 5 ? 'selected' : ''} ${day ? '' : 'empty'}`}
                                onClick={() => day && setSelectedDate(`2024-07-${day.toString().padStart(2, '0')}`)}
                              >
                                {day || ''}
                              </div>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="time-slots-card">
                <Card.Body>
                  <h5 className="text-center">Available Times on July 5, 2024</h5>
                  <div className="time-slots">
                    {timeSlots.map(time => (
                      <div
                        key={time}
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              <Button 
                className="confirm-btn" 
                onClick={handleBooking}
                disabled={!selectedService || !selectedDoctor || !selectedTime}
              >
                Confirm Booking
              </Button>

              {/* Booking Summary */}
              {selectedService && selectedDoctor && selectedTime && (
                <Card className="summary-card mt-3">
                  <Card.Body>
                    <h6>Booking Summary</h6>
                    <p><strong>Service:</strong> {selectedService}</p>
                    <p><strong>Doctor:</strong> {selectedDoctor}</p>
                    <p><strong>Date:</strong> July 5, 2024</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;