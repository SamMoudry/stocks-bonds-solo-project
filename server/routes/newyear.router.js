const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST a new year
router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        //Destructurs req.body
        const {
            year_number,
            game_id,
            total_yield,
            total_money,
            stocks
        } = req.body;
        await client.query('BEGIN')
        //Creates variable(resultset) to hold id after INSERT 
        const yearInsertResults = await client.query(`INSERT INTO "year" ("year_number", "game_id", "total_yield", "total_money")
        VALUES ($1, $2, $3, $4)
        RETURNING id`, [year_number, game_id, total_yield, total_money]);
        //Sets the id to a usable variable
        const yearId = yearInsertResults.rows[0].id;

        //takes the array of objects(stocks) and maps them out to INSERT each one into stock_year, using the yearId from the previous INSERT
        await Promise.all(stocks.map(stock => {
            const insertLineItemText = `INSERT INTO "stock_year" ("year_id", "stock_id", "value", "stock_amount", "game_id") VALUES ($1, $2, $3, $4, $5)`;
            const insertLineItemValues = [yearId, stock.stock_id, stock.value, stock.stock_amount, game_id];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/game', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;