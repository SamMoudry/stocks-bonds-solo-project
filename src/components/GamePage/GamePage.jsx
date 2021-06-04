import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './GamePage.css'
import GameTable from './GameTable/GameTable.jsx';

function GamePage() {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);
  const [amount4, setAmount4] = useState(0);
  const [amount5, setAmount5] = useState(0);
  const [amount6, setAmount6] = useState(0);
  const [amount7, setAmount7] = useState(0);
  const [amount8, setAmount8] = useState(0);
  const [amount9, setAmount9] = useState(0);
  const [amount10, setAmount10] = useState(0);
  const [stocks, setStocks] = useState({
    value1: 100,
    value2: 100,
    value3: 100,
    value4: 100,
    value5: 100,
    value6: 100,
    value7: 100,
    value8: 100,
    value9: 100,
    value10: 100
  });
  const [amounts, setAmounts] = useState({
    amount1: amount1,
    amount2: amount2,
    amount3: amount3,
    amount4: amount4,
    amount5: amount5,
    amount6: amount6,
    amount7: amount7,
    amount8: amount8,
    amount9: amount9,
    amount10: amount10,
  });
  const [totalBalance, setTotalBalance] = useState(5000);
  const [yearlyEarnings, setYearlyEarnings] = useState(0);
  const [yearNum, setYearNum] = useState(0);
  const dispatch = useDispatch();
  const user_id = useSelector(store => store.user.id)
  const gameId = useSelector(store => store.setNewGame.gameId);
  const newYearData = useSelector(store => store.setNewYear);
  let currentTableYear = newYearData[newYearData.length - 1];
  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: {userId: user_id}});
    // if (currentTableYear) {
    //   taco();
    // }
    return (() => dispatch({ type: 'CLEAR_NEW_YEAR'}));
  }, [dispatch, user_id]);

  const YearButton = () => {
    if (gameId) {
      if (yearNum === 0) {
        return (
          <button onClick={newYear}>Start Game</button>
        );
      } else if (yearNum === 11) {
          return (
            <button onClick={newYear}>New Game</button>
          );
      } else {
        return (
          <button onClick={newYear}>Year {yearNum}</button>
        );
      }
    }
  }


  const newYear = () => {
    const stockDataToSend = [{stock_id: 1, value: stocks.value1, stock_amount: amounts.amount1},
                            {stock_id: 2, value: stocks.value2, stock_amount: amounts.amount2},
                            {stock_id: 3, value: stocks.value3, stock_amount: amounts.amount3},
                            {stock_id: 4, value: stocks.value4, stock_amount: amounts.amount4},
                            {stock_id: 5, value: stocks.value5, stock_amount: amounts.amount5},
                            {stock_id: 6, value: stocks.value6, stock_amount: amounts.amount6},
                            {stock_id: 7, value: stocks.value7, stock_amount: amounts.amount7},
                            {stock_id: 8, value: stocks.value8, stock_amount: amounts.amount8},
                            {stock_id: 9, value: stocks.value9, stock_amount: amounts.amount9},
                            {stock_id: 10, value: stocks.value10, stock_amount: amounts.amount10}
                          ]
    dispatch({type: 'LAST_YEAR', payload: {year_number: yearNum, 
      game_id: gameId, 
      total_yield: yearlyEarnings, 
      total_money: totalBalance, 
      stocks: stockDataToSend,
    }});
  }


  const taco = () => {
    setStocks({value1: 100,
      value2: currentTableYear.value[0],
      value3: currentTableYear.value[1],
      value4: currentTableYear.value[2],
      value5: currentTableYear.value[3],
      value6: currentTableYear.value[4],
      value7: currentTableYear.value[5],
      value8: currentTableYear.value[6],
      value9: currentTableYear.value[7],
      value10: currentTableYear.value[8]})
    setTotalBalance(currentTableYear.total_money);
    setYearlyEarnings(currentTableYear.total_yield);
    setYearNum(currentTableYear.year_number);
    console.log(stocks);
  }

  

  const saveGame = () => {
    dispatch({type: 'ADD_SAVED_GAME', payload: {game_id: gameId, user_id: user_id, description: `${gameId}`}})
  }


  return (
    <div className="container">
      <GameTable />
      {YearButton()}
      <button onClick={saveGame}>Save Game</button>
      <div>Total Balance: {totalBalance}</div><br />
      <div>Yearly Earnings: {yearlyEarnings}</div>
      <form>
        <div className="stock_amount">
          <label htmlFor="amount1">Central City Bonds:</label>
          <input type="number" id="amount1" value={amount1} step="10" min="0" onChange={(event) => setAmount1(event.target.value)} />
        </div>
        <div className="stock_amount">
          <label htmlFor="amount2">Growth Corp:</label>
          <input type="number" id="amount2" value={amount2} step="10" min="0" onChange={(event) => setAmount2(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount3">Metro Prop:</label>
          <input type="number" id="amount3" value={amount3} step="10" min="0" onChange={(event) => setAmount3(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount4">Pioneer Mult:</label>
          <input type="number" id="amount4" value={amount4} step="10" min="0" onChange={(event) => setAmount4(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount5">Shady Brooks:</label>
          <input type="number" id="amount5" value={amount5} step="10" min="0" onChange={(event) => setAmount5(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount6">Stryker Drlg:</label>
          <input type="number" id="amount6" value={amount6} step="10" min="0" onChange={(event) => setAmount6(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount7">Tri City Trans:</label>
          <input type="number" id="amount7" value={amount7} step="10" min="0" onChange={(event) => setAmount7(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount8">United Auto:</label>
          <input type="number" id="amount8" value={amount8} step="10" min="0" onChange={(event) => setAmount8(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount9">Uranium Ent:</label>
          <input type="number" id="amount9" value={amount9} step="10" min="0" onChange={(event) => setAmount9(event.target.value)}/>
        </div>
        <div className="stock_amount">
          <label htmlFor="amount10">Valley Power:</label>
          <input type="number" id="amount10" value={amount10} step="10" min="0" onChange={(event) => setAmount10(event.target.value)}/>
        </div>
      </form>
    </div>
  );
}

export default GamePage;
