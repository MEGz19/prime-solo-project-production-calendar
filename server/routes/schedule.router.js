const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



//GET info from "conflicts" table in database
router.get('/', rejectUnauthenticated, (req, res) => {
    let id = [req.user.id]
    let queryText = `SELECT "conflicts".id, "conflicts".date, "conflicts".start_time, "conflicts".end_time, "conflicts".description, "conflicts".user_id
        FROM "conflicts"
        WHERE "conflicts".user_id = $1
    `
        pool.query(queryText, id).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in server GET:', err);
        res.sendStatus(500);
    })

});

// POST to the database, conflicts table
router.post('/', rejectUnauthenticated, (req, res) => {
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

// DELETE conflict from database list with a matching id
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for conflict id', reqId);
    let queryText = `DELETE FROM "conflicts" WHERE id = $1;`
    pool.query(queryText, [reqId]).then(result => {
        console.log('Conflict deleted');
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Error making database DELETE query ${queryText}`, error);
        res.sendStatus(500);
    })
})

// PUT/UPDATE conflict from database list with matching id
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('Update/Put request to update conflict id', req.params);
    console.log(req.body);
    let queryText = `UPDATE  "conflicts"
    SET date = $1, start_time = $2, end_time = $3, description = $4
    WHERE id = $5
    `
    pool.query(queryText, [req.body.date, req.body.startTime, req.body.endTime, req.body.description, req.params.id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error making PUT/UPDATE query ${queryText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router;