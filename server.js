const express = require('express');
const bodyParser = require('body-parser');
const Patient = require('./models/patientModel');

const app = express();
const PORT = 3000;

// Database to store patient information
const patientsDB = [];

app.use(bodyParser.json());

// Patient Registration
app.post('/api/patients/register', (req, res) => {
  const patientData = req.body;
  const registrationResult = Patient.register(patientData);

  if (registrationResult.success) {
    res.status(201).json({ message: registrationResult.message });
  } else {
    res.status(400).json({ message: registrationResult.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


