const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log("In GET router");
    let queryText = 'SELECT * from "tasks"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}); //end get
// http://localhost:5001/todo Test Complete

// POST
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "tasks" ("task", "complete") VALUES ($1, $2);'
    pool.query(queryText, [req.body.task, req.body.complete])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}); // end POST

// DELETE
router.delete('/:id', (req, res) => {
    let {id} = req.params
    const sqlText = `DELETE FROM "tasks" WHERE "id" = $1;`
    pool.query(sqlText, [id])
    .then((response) => {
        console.log(`got stuff from database`, response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making query`,error);
        res.sendStatus(500);
    })
}) // end DELETE

// PUT
router.put('/toggle/:id', (req, res) => {
    let {id} = req.params;
    const sqlText = `UPDATE "tasks" SET "complete" = NOT "complete" WHERE "id" = $1`
    pool.query(sqlText, [id])
    .then((response) => {
        console.log(`got stuff from database`, response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making query`,error);
        res.sendStatus(500);
    })
}) // end PUT



module.exports = router;
