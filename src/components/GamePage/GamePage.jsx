import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './GamePage.css'
import GameTable from './GameTable/GameTable.jsx';

function GamePage() {
  const history = useHistory();
  const [year, setYear] = useState({
    value1: 100,
    value2: 100,
    value3: 100,
    value4: 100,
    value5: 100,
    value6: 100,
    value7: 100,
    value8: 100,
    value9: 100,
    value10: 100,
    amount1: 0,
    amount2: 0,
    amount3: 0,
    amount4: 0,
    amount5: 0,
    amount6: 0,
    amount7: 0,
    amount8: 0,
    amount9: 0,
    amount10: 0,
    totalBalance: 5000,
    yearlyEarnings: 0,
    yearNum: 0
  });
  const dispatch = useDispatch();
  const user_id = useSelector(store => store.user.id)
  const gameId = useSelector(store => store.setNewGame.gameId);
  const newYearData = useSelector(store => store.setNewYear);
  let currentTableYear = newYearData[newYearData.length - 1];
  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: {userId: user_id}});
    return (() => dispatch({ type: 'CLEAR_NEW_YEAR'}));
  }, [dispatch, user_id]);

  useEffect(() => {
    console.log('in useEffect for yearData');
    console.log('CurrentTableYear', currentTableYear);
    if (currentTableYear && currentTableYear.value) {
      taco();
    }
  }, [currentTableYear]);

  const YearButton = () => {
    if (gameId) {
      if (year.yearNum === 0) {
        return (
          <button onClick={newYear}>Start Game</button>
        );
      } else if (Number(year.yearNum) + 1 === 11) {
        return (
          <button onClick={newYear}>Closing</button>
        );
      }else if (Number(year.yearNum) + 1 === 12) {
          return (
            <button onClick={newGame}>New Game</button>
          );
      } else {
        return (
          <button onClick={newYear}>Year {Number(year.yearNum) + 1}</button>
        );
      }
    }
  }

  const newGame = () => {
    history.push('/home');
  }

  const newYear = () => {
    const stockDataToSend = [{stock_id: 1, value: year.value1, stock_amount: year.amount1},
                            {stock_id: 2, value: year.value2, stock_amount: year.amount2},
                            {stock_id: 3, value: year.value3, stock_amount: year.amount3},
                            {stock_id: 4, value: year.value4, stock_amount: year.amount4},
                            {stock_id: 5, value: year.value5, stock_amount: year.amount5},
                            {stock_id: 6, value: year.value6, stock_amount: year.amount6},
                            {stock_id: 7, value: year.value7, stock_amount: year.amount7},
                            {stock_id: 8, value: year.value8, stock_amount: year.amount8},
                            {stock_id: 9, value: year.value9, stock_amount: year.amount9},
                            {stock_id: 10, value: year.value10, stock_amount: year.amount10}
                          ]
    dispatch({type: 'LAST_YEAR', payload: {year_number: year.yearNum, 
      game_id: gameId, 
      total_yield: year.yearlyEarnings, 
      total_money: year.totalBalance, 
      stocks: stockDataToSend,
    }});
  }

  const taco = () => {
    setYear({value1: 100,
      value2: currentTableYear.value[0],
      value3: currentTableYear.value[1],
      value4: currentTableYear.value[2],
      value5: currentTableYear.value[3],
      value6: currentTableYear.value[4],
      value7: currentTableYear.value[5],
      value8: currentTableYear.value[6],
      value9: currentTableYear.value[7],
      value10: currentTableYear.value[8],
      amount1: 0,
      amount2: currentTableYear.stock_amount[0],
      amount3: currentTableYear.stock_amount[1],
      amount4: currentTableYear.stock_amount[2],
      amount5: currentTableYear.stock_amount[3],
      amount6: currentTableYear.stock_amount[4],
      amount7: currentTableYear.stock_amount[5],
      amount8: currentTableYear.stock_amount[6],
      amount9: currentTableYear.stock_amount[7],
      amount10: currentTableYear.stock_amount[8],
      totalBalance: currentTableYear.total_money,
      yearlyEarnings: currentTableYear.total_yield,
      yearNum: currentTableYear.year_number,
    })
  }

  const saveGame = () => {
    dispatch({type: 'ADD_SAVED_GAME', payload: {game_id: gameId, user_id: user_id, description: `${gameId}`}})
  }

  const handleChange = (e) => {
    setYear({...year,
    [e.target.name]: e.target.value})
  }

  console.log(year);

  return (
    <div className="container">
      <GameTable />
      {YearButton()}
      <button onClick={saveGame}>Save Game</button>
      <div>Total Balance: {year.totalBalance}</div><br />
      <div>Yearly Earnings: {year.yearlyEarnings}</div>
      <form>
        <div className="stock_amount">
          <label htmlFor="amount1">Central City Bonds:</label>
          <input type="number" id="amount1" value={year.amount1} step="10" min="0" name="amount1"
          onChange={handleChange} />
        </div>
        <div className="stock_amount">
          <label htmlFor="amount2">Growth Corp:</label>
          <input type="number" id="amount2" value={year.amount2} step="10" min="0" name="amount2"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount3">Metro Prop:</label>
          <input type="number" id="amount3" value={year.amount3} step="10" min="0" name="amount3"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount4">Pioneer Mult:</label>
          <input type="number" id="amount4" value={year.amount4} step="10" min="0" name="amount4"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount5">Shady Brooks:</label>
          <input type="number" id="amount5" value={year.amount5} step="10" min="0" name="amount5"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount6">Stryker Drlg:</label>
          <input type="number" id="amount6" value={year.amount6} step="10" min="0" name="amount6"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount7">Tri City Trans:</label>
          <input type="number" id="amount7" value={year.amount7} step="10" min="0" name="amount7"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount8">United Auto:</label>
          <input type="number" id="amount8" value={year.amount8} step="10" min="0" name="amount8"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount9">Uranium Ent:</label>
          <input type="number" id="amount9" value={year.amount9} step="10" min="0" name="amount9"
          onChange={handleChange}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount10">Valley Power:</label>
          <input type="number" id="amount10" value={year.amount10} step="10" min="0" name="amount10"
          onChange={handleChange}/>
        </div>
      </form>
    </div>
  );
}

export default GamePage;
