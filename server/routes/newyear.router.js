const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST previous year
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
            const insertLineItemText = `INSERT INTO "stock_year" ("year_id", "stock_id", "value", "stock_amount") VALUES ($1, $2, $3, $4)`;
            const insertLineItemValues = [yearId, stock.stock_id, stock.value, stock.stock_amount];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        //Rollback takes back all the code it there is an error.  If one INSERT worked but the other didn't it would take back the first INSERT from the DATABASE
        await client.query('ROLLBACK')
        console.log('Error POST /api/newyear', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

//GET next year data
router.get('/:id/:year', (req, res) => {
    //Generates the roll of 2d6
    let dieroll = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6));
	dieroll = dieroll - 2;
    //Generates the two possible sides for the slider
    let slider_side = Math.floor(Math.random() * 2) + 1;

    let queryText = `SELECT SUM(year_number + 1) AS year_number, game_id, total_yield, total_money, stock_amount, SUM(value + change) AS value FROM "year" 
    JOIN stock_year ON year_id = year.id
    JOIN slider ON slider.stock_id = stock_year.stock_id
    WHERE game_id = $1
    AND year_number = $2
    AND slider.side = $3
    AND slider.die_roll = $4
    GROUP BY stock_year.stock_id, year.year_number, year.total_yield, year.total_money, stock_year.stock_amount, year.game_id;`
    pool.query(queryText, [Number(req.params.id), Number(req.params.year), slider_side, dieroll])
        .then((result) => {
            let valueArray = [];
            let stockArray = [];
            for (let i = 0; i < result.rows.length; i++) {
                valueArray.push(Number(result.rows[i].value));
                stockArray.push(Number(result.rows[i].stock_amount));
            }
            res.send({ gameId: result.rows[0].game_id,
            year_number: result.rows[0].year_number,
            total_yield: result.rows[0].total_yield,
            total_money: result.rows[0].total_money,
            stock_amount: stockArray,
            value: valueArray,
            });
        })
        .catch((error) => {
            console.log('Error GET /api/newyear', error)
            res.sendStatus(500);
        });
})

module.exports = router;