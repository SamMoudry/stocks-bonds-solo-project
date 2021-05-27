import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './GamePage.css'

function GamePage() {
  const [value1, setValue1] = useState(100);
  const [value2, setValue2] = useState(100);
  const [value3, setValue3] = useState(100);
  const [value4, setValue4] = useState(100);
  const [value5, setValue5] = useState(100);
  const [value6, setValue6] = useState(100);
  const [value7, setValue7] = useState(100);
  const [value8, setValue8] = useState(100);
  const [value9, setValue9] = useState(100);
  const [value10, setValue10] = useState(100);
  const [totalBalance, setTotalBalance] = useState(5000);
  const [yearlyEarnings, setYearlyEarnings] = useState(0);
  const [newYearNum, setNewYearNum] = useState(0);
  const dispatch = useDispatch();
  const user_id = useSelector(store => store.user.id)

  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: {userId: user_id}});
  }, [dispatch, user_id]);

  const newYear = () => {
    console.log('in newYear');
  }

  const YearButton = () => {
    console.log(newYearNum);
    if (newYearNum === 0) {
      return (
        <button onClick={newYear}>Start Game</button>
      );
    } if (newYearNum === 11) {
        return (
          <button onClick={newYear}>New Game</button>
        );
    } else {
      return (
        <button onClick={newYear}>Year {newYearNum}</button>
      );
    }
  }





  return (
    <div className="container">
      <table id="stockboard">
        <tbody>
        <tr>
          <th className="stockheader">Stocks</th>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_1">Central City Bonds</span><br />
            <div className="yieldstyle">YIELD 5%</div>
            <input type="hidden" value={value1} id="value_0_1" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_2">Growth Corp</span><br />
            <div className="yieldstyle">YIELD 1%</div>
            <input type="hidden" value={value2} id="value_0_2" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_3">Metro Prop</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value={value3} id="value_0_3" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_4">Pioneer Mutl</span><br />
            <div className="yieldstyle">YIELD 4%</div>
            <input type="hidden" value={value4} id="value_0_4" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_5">Shady Brooks</span><br />
            <div className="yieldstyle">YIELD 7%</div>
            <input type="hidden" value={value5} id="value_0_5" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_6">Stryker Drlg</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value={value6} id="value_0_6" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_7">Tri City Trans</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value={value7} id="value_0_7" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_8">United Auto</span><br />
            <div className="yieldstyle">YIELD 2%</div>
            <input type="hidden" value={value8} id="value_0_8" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_9">Uranium Ent</span><br />
            <div className="yieldstyle">YIELD 6%</div>
            <input type="hidden" value={value9} id="value_0_9" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_10">Valley Power</span><br />
            <div className="yieldstyle">YIELD 3%</div>
            <input type="hidden" value={value10} id="value_0_10" />
          </td>
        </tr>
        </tbody>
      </table><br />
      {YearButton()}
      <div>Total Balance: {totalBalance}</div><br />
      <div>Yearly Earnings: {yearlyEarnings}</div>
    </div>
  );
}

export default GamePage;
