import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './GamePage.css'
import GameTable from './GameTable/GameTable.jsx';

function GamePage() {
  const [value1, setValue1] = useState(100);
  const [amount1, setAmount1] = useState(0);
  const [value2, setValue2] = useState(100);
  const [amount2, setAmount2] = useState(0);
  const [value3, setValue3] = useState(100);
  const [amount3, setAmount3] = useState(0);
  const [value4, setValue4] = useState(100);
  const [amount4, setAmount4] = useState(0);
  const [value5, setValue5] = useState(100);
  const [amount5, setAmount5] = useState(0);
  const [value6, setValue6] = useState(100);
  const [amount6, setAmount6] = useState(0);
  const [value7, setValue7] = useState(100);
  const [amount7, setAmount7] = useState(0);
  const [value8, setValue8] = useState(100);
  const [amount8, setAmount8] = useState(0);
  const [value9, setValue9] = useState(100);
  const [amount9, setAmount9] = useState(0);
  const [value10, setValue10] = useState(100);
  const [amount10, setAmount10] = useState(0);
  const [totalBalance, setTotalBalance] = useState(5000);
  const [yearlyEarnings, setYearlyEarnings] = useState(0);
  const [yearNum, setYearNum] = useState(0);
  const dispatch = useDispatch();
  const user_id = useSelector(store => store.user.id)
  const gameId = useSelector(store => store.setNewGame.gameId);
  const newYearData = useSelector(store => store.setNewYear);
  let currentYear = newYearData[newYearData.length - 1];
  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: {userId: user_id}});
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
    const stockDataToSend = [{stock_id: 1, value: value1, stock_amount: amount1},
                            {stock_id: 2, value: value2, stock_amount: amount2},
                            {stock_id: 3, value: value3, stock_amount: amount3},
                            {stock_id: 4, value: value4, stock_amount: amount4},
                            {stock_id: 5, value: value5, stock_amount: amount5},
                            {stock_id: 6, value: value6, stock_amount: amount6},
                            {stock_id: 7, value: value7, stock_amount: amount7},
                            {stock_id: 8, value: value8, stock_amount: amount8},
                            {stock_id: 9, value: value9, stock_amount: amount9},
                            {stock_id: 10, value: value10, stock_amount: amount10}
                          ]
    dispatch({type: 'LAST_YEAR', payload: {year_number: yearNum, 
      game_id: gameId, 
      total_yield: yearlyEarnings, 
      total_money: totalBalance, 
      stocks: stockDataToSend,
    }});
  }


  // const taco = () => {
  //   setValue2(currentYear.value[0]);
  //   setValue3(currentYear.value[1]);
  //   setValue4(currentYear.value[2]);
  //   setValue5(currentYear.value[3]);
  //   setValue6(currentYear.value[4]);
  //   setValue7(currentYear.value[5]);
  //   setValue8(currentYear.value[6]);
  //   setValue9(currentYear.value[7]);
  //   setValue10(currentYear.value[8]);
  //   setTotalBalance(currentYear.total_money);
  //   setYearlyEarnings(currentYear.total_yield);
  //   setYearNum(currentYear.year_number);
  //   console.log(value2);
  // }

  // if (currentYear) {
  //   taco();
  // }

  const [stocks, setStocks] = useState({

  })

  return (
    <div className="container">
      <GameTable />
      {YearButton()}
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
