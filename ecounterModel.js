// models/encounterModel.js
class Encounter {
    constructor(encounterId, patientId, dateAndTime, type) {
      this.encounterId = encounterId;
      this.patientId = patientId;
      this.dateAndTime = dateAndTime;
      this.type = type;
    }
  
    // Method for starting an encounter
    static start(patientId, type) {
      const encounterId = generateEncounterId(); // You can implement a function to generate a unique encounter ID
      const dateAndTime = new Date().toISOString();
  
      // Create a new encounter instance
      const newEncounter = new Encounter(encounterId, patientId, dateAndTime, type);
  
      // Add the new encounter to the database
      encountersDB.push(newEncounter);
  
      return { success: true, message: 'Encounter started successfully' };
    }
  }
  
  // Function to generate a unique encounter ID (you can implement your own logic)
  function generateEncounterId() {
    // Implementation goes here
  }
  
  module.exports = Encounter;
  