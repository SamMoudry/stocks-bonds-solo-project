const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "saved_games" ("game_id", "user_id", "description")
                        VALUES ($1, $2, $3);`
    pool.query(queryText, [req.body.game_id, req.body.user_id, req.body.description])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error POST /api/savegame', err);
      res.sendStatus(500);
    });
})

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "saved_games"
    WHERE user_id = $1;`
    
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        }) .catch((error) => {
            console.log('Error GET /api/savegame', error)
            res.sendStatus(500);
        });
})

router.delete('/:id', (req,res) => {
    const queryText = `DELETE FROM "saved_games" 
    WHERE id = $1;`
    pool.query(queryText, [req.params.id])
        .then ((result) => {
            res.sendStatus(200);
        }) .catch((error) => {
            console.log('Error DELETE /api/savegame', error);
            res.sendStatus(500);
        });
})

router.put('/:id', (req, res) => {
    const queryText = `UPDATE "saved_games" SET "description" = $1 WHERE id = $2`
    pool.query(queryText, [req.body.description, req.params.id])
        .then((dbResponse) => {
            res.send(dbResponse.rows);
        }) .catch((error) => {
            console.log('Error PUT /api/savegame', error);
            res.sendStatus(500);
        });
})

module.exports = router;