// src/components/RegisterEmployee.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import './RegisterEmployee.css'; // Import the CSS file

const RegisterEmployee = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDescription, setEmployeeDescription] = useState('');
  const [employeeAge, setEmployeeAge] = useState('');
  const [employeeGender, setEmployeeGender] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/employees', {
        employeeName,
        employeeDescription,
        employeeAge,
        employeeGender,
      });
      console.log('Employee registered', response.data);
    } catch (error) {
      console.error('Error registering employee', error);
    }
  };

  const handleClear = () => {
    setEmployeeName('');
    setEmployeeDescription('');
    setEmployeeAge('');
    setEmployeeGender('');
  };

  return (
    <div className="register-container">
      <Container maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Register Employee
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Employee Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Description"
              value={employeeDescription}
              onChange={(e) => setEmployeeDescription(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Age"
              value={employeeAge}
              onChange={(e) => setEmployeeAge(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Gender"
              value={employeeGender}
              onChange={(e) => setEmployeeGender(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClear}>
                Clear
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default RegisterEmployee;
