const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const OSMSUSER = mongoose.model("OSMSUSER");
const OSMSREQUEST = mongoose.model("OSMSREQUEST");
const OSMSTECHNECIAN = mongoose.model("OSMSTECHNECIAN");
const requireLoginUser = require("../middleware/requireLoginUser");

//to create a technician
router.post("/api/admin/add/technicians", async (req, res) => {
  try {
    // Extract the fields from the request body
    const { name, email, city, mobile } = req.body;

    // Create a new document using the OSMSTECHNECIAN model
    const technician = new OSMSTECHNECIAN({ name, email, city, mobile });

    // Save the new document to the database
    await technician.save();
console.log(technician)
    // Return a success response with the new document
    res.status(201).json({ message: "Technician created", technician });
  } catch (err) {
    // Return an error response if there was an error
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//get all technician
router.get("/api/admin/get/technicians", (req, res) => {
    OSMSTECHNECIAN.find()
    .then((technicians) => {
      res.json(technicians);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//to delete a technician
router.delete('/api/admin/delete/technicians/:technicianId', (req, res) => {
    const { technicianId } = req.params;
    
    OSMSTECHNECIAN.findByIdAndDelete(technicianId)
      .then((deletedTechnician) => {
        if (!deletedTechnician) {
          return res.status(404).json({ error: 'Technician not found' });
        }
        return res.json({ message: 'Technician deleted successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      });
  }); 

module.exports = router;
