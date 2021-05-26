const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "games" ("user_id") 
    VALUES ($1)
    RETURNING id`
     const newGame = client.query(queryText, [req.body.id])
        .then(() => {
            res.sendStatus(newGame.rows[0].id);
        })
        .catch((error) => {
            console.log('Error POST /api/newgame', error)
            res.sendStatus(500);
        });
})


module.exports = router;