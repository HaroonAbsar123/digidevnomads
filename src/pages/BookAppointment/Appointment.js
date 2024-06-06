import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import classes from './Appointment.module.css';
import { FormControl, Select, Button, MenuItem, TextField } from "@mui/material";
import { MyContext } from "../../Context/MyContext";

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = [
  'Asia/Karachi', 'America/New_York', 'Europe/London', 'Asia/Tokyo'
];

const times = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Karachi');

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const {appointmentRef} = useContext(MyContext)

  useEffect(() => {
    // Automatically select the next available date (excluding Sundays)
    let nextAvailableDate = dayjs().add(1, 'day');
    while (nextAvailableDate.day() === 0) {
      nextAvailableDate = nextAvailableDate.add(1, 'day');
    }
    setSelectedDate(nextAvailableDate);
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Date:', selectedDate ? selectedDate.format('YYYY-MM-DD') : null);
    console.log('Selected Time:', selectedTime);
    console.log('Selected Timezone:', selectedTimezone);
  };

  const disableDates = (date) => {
    return date.isBefore(dayjs().startOf('day')) || date.day() === 0; // Disable dates before today and Sundays
  };

  const renderTimes = () => {
    return times.map((time, index) => (
      <Button
        key={index}
        onClick={() => handleTimeClick(time)}
        variant={selectedTime === time ? 'contained' : 'outlined'}
        style={{ margin: '0.5em', borderColor: '#ccc', color: selectedTime === time ? "#000" : '#fff' }}
      >
        {time}
      </Button>
    ));
  };

  return (
    <section ref={appointmentRef} className={classes.sectionContainer}>
      
      <div className={classes.title}>BOOK APPOINTMENT</div>

      <div className={classes.container}>


        
      <div className={classes.colHeading} style={{marginBottom: '10px'}}>Provide Your Information</div>

      <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                  flexWrap: 'wrap'
                }}
              >
                <TextField
                  style={{ flex: 1, minWidth: '300px' }}
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                />

                <TextField
                  style={{ flex: 1, minWidth: '300px' }}
                  label="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>



        <Row style={{padding: "0px 12px", gap: '10px'}}>
          <Col style={{ textAlign: 'center', flex: 1, minWidth: '300px', borderRadius: '3px', background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(15px)', padding: '20px 10px' }}>
            <div className={classes.colHeading}>Select Date</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                style={{ marginTop: '45px', marginBottom: '30px'}}
                className={classes.calendar}
                disablePast
                shouldDisableDate={disableDates}
                onChange={handleDateChange}
                value={selectedDate}
              />
            </LocalizationProvider>
          </Col>
          <Col style={{ textAlign: 'center', flex: 1, minWidth: '300px', borderRadius: '3px', background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(15px)', padding: '20px 10px' }}>
            <div className={classes.colHeading}>Available Starting Times</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {selectedDate && renderTimes()}
            </div>
          </Col>
        </Row>
        
      {/* <button style={{marginTop: '0px', width: 'max-content', alignSelf: 'center', marginTop: '30px'}} onClick={handleSubmit} className="buttonHome">
              Submit
            </button> */}
            <Button variant="contained" style={{width: '100%', marginTop: '10px', background: 'linear-gradient(90deg, #03a9f4, #f441a5)', color: '#fff'}} onClick={handleSubmit}>
            Submit
            </Button>

      </div>
      
        

    </section>
  );
}
