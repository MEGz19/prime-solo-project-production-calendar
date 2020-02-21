const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET all info from "conflicts" table in database
router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT "conflicts".date, "conflicts".start_time, "conflicts".end_time,"conflicts".description, "contact_info".name
        FROM "conflicts"
        JOIN "contact_info" ON "conflicts".user_id = 
        "contact_info".user_id
        ORDER BY "name";
    `
        pool.query(queryText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in admin server GET:', err);
        res.sendStatus(500);
    })

});

module.exports = router;