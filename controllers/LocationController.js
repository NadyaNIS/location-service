const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const publicKey = fs.readFileSync(path.join(__dirname, '../public.key'));

const Satellite = require("../models/Satellite");

// --- Get health, of the Satellite
exports.getLocation = (req, res) => {
  const token = req.headers.auth;

  try {
    const decoded = jwt.verify(token, publicKey);
    if (decoded.privileges.indexOf('ASSIGN_HERO') >= 0) {
      Satellite.find({
        "settled_location.lat": req.params.lat,
        "settled_location.long": req.params.long
      }, (err, satellite) => {
        if (err) {
          res.status(500).send(err);
        }

        res.status(200).json({
          statusCode: 200,
          statusMessage: '',
          data: satellite
        });
      });
    } else {
      res.status(403).json({
        statusCode: 403,
        statusMessage: 'Access Denied',
        data: []
      });
    }
  }
  catch (error) {
    res.status(400).json({
      statusCode: 400,
      statusMessage: 'Something went wrong',
      data: error
    });
  }
};