const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const roles = req.body.roles;
  const addressLine1 = req.body.addressLine1;
  const addressLine2 = req.body.addressLine2;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;

  // Query to send info to user table in database
  const queryText = 'INSERT INTO "user" ("username", "password") VALUES ($1, $2) RETURNING id';
  // Query to send info to contact_info tabel in database
  const queryText2 = 'INSERT INTO "contact_info" ("name", "phoneNumber", "email", "roles", "addressLine1", "addressLine2", city, state, "zipCode", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  pool.query(queryText, [username, password])
    .then((result) => {
      console.log(result)
      pool.query(queryText2, [name, phoneNumber, email, roles, addressLine1, addressLine2, city, state, zipCode, result.rows[0].id])}) 
      .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
