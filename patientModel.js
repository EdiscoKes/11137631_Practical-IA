// models/patientModel.js
class Patient {
    constructor(patientId, surname, otherNames, gender, phoneNumber, residentialAddress, emergencyName, emergencyContact, relationship) {
      this.patientId = patientId;
      this.surname = surname;
      this.otherNames = otherNames;
      this.gender = gender;
      this.phoneNumber = phoneNumber;
      this.residentialAddress = residentialAddress;
      this.emergencyName = emergencyName;
      this.emergencyContact = emergencyContact;
      this.relationship = relationship;
    }
  
    // Method for patient registration
    static register(patientData) {
      const {
        patientId,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyName,
        emergencyContact,
        relationship,
      } = patientData;
  
      // Check if the patient already exists
      const existingPatient = patientsDB.find(p => p.patientId === patientId);
      if (existingPatient) {
        return { success: false, message: 'Patient already exists' };
      }
  
      // Create a new patient instance
      const newPatient = new Patient(
        patientId,
        surname,
        otherNames,
        gender,
        phoneNumber,
        residentialAddress,
        emergencyName,
        emergencyContact,
        relationship
      );
  
      // Add the new patient to the database
      patientsDB.push(newPatient);
  
      return { success: true, message: 'Patient registered successfully' };
    }
  }
  
  module.exports = Patient;
  