import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
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
    if (!selectedService || !selectedDoctor || !selectedDate || !selectedTime) {
      alert('Please select service, doctor, date, and time');
      return;
    }
    
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const bookingDetails = {
      service: selectedService,
      doctor: selectedDoctor,
      date: formattedDate,
      time: selectedTime
    };
    
    alert(`Appointment Booked Successfully!\n\nService: ${bookingDetails.service}\nDoctor: ${bookingDetails.doctor}\nDate: ${bookingDetails.date}\nTime: ${bookingDetails.time}`);
  };

  // Filter out weekends and past dates
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Sunday = 0, Saturday = 6
  };

  const isPastDate = (date) => {
    return date < new Date().setHours(0, 0, 0, 0);
  };

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
              <Card className="form-card h-100">
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

                  <div className="form-group">
                    <label className="form-label">Select Date</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      filterDate={(date) => isWeekday(date) && !isPastDate(date)}
                      placeholderText="Choose a date"
                      className="form-select-custom date-picker"
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>

                  {selectedDate && (
                    <div className="selected-date-info">
                      <h6>Selected Date:</h6>
                      <p className="selected-date-text">
                        {selectedDate.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="time-slots-card h-100">
                <Card.Body>
                  <h5 className="text-center">
                    {selectedDate ? `Available Times on ${selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}` : 'Select a date to see available times'}
                  </h5>
                  
                  {selectedDate ? (
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
                  ) : (
                    <div className="no-date-selected">
                      <p>Please select a date to view available time slots</p>
                    </div>
                  )}
                </Card.Body>
              </Card>

              <Button 
                className="confirm-btn mt-3" 
                onClick={handleBooking}
                disabled={!selectedService || !selectedDoctor || !selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>

              {/* Booking Summary */}
              {selectedService && selectedDoctor && selectedDate && selectedTime && (
                <Card className="summary-card mt-3">
                  <Card.Body>
                    <h6>Booking Summary</h6>
                    <p><strong>Service:</strong> {selectedService}</p>
                    <p><strong>Doctor:</strong> {selectedDoctor}</p>
                    <p><strong>Date:</strong> {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
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