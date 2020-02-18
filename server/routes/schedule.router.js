const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//GET info from "conflicts" table in database
router.get('/', (req, res) => {
    let id = [req.user.id]
    let queryText = `SELECT "conflicts".date, "conflicts".start_time, "conflicts".end_time, "conflicts".description, "conflicts".user_id
        FROM "conflicts"
        WHERE "conflicts".user_id = $1
    `
    // FIX THE WHERE PART OF ABOVE SQL QUERY
    pool.query(queryText, id).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in server GET:', err);
        res.sendStatus(500);
    })

});

// POST to the database, conflicts table
router.post('/', (req, res) => {
    console.log('test');
    console.log(req.body);
    console.log(req.user);
    let id = [req.body.date, req.body.startTime, req.body.endTime, req.body.description, req.user.id]
    console.log(id);

    let queryText = `
    INSERT INTO "conflicts" ("date", "start_time", "end_time", "description", "user_id") 
    VALUES ($1, $2, $3, $4, $5);
    `
    pool.query(queryText, id).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log('error in / schedule POST', err);
        res.sendStatus(500);
    })
});

module.exports = router;