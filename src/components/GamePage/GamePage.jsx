import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './GamePage.css'

function GamePage() {
  const value1 = useState(100);
  const value2 = useState(100);
  const value3 = useState(100);
  const value4 = useState(100);
  const value5 = useState(100);
  const value6 = useState(100);
  const value7 = useState(100);
  const value8 = useState(100);
  const value9 = useState(100);
  const value10 = useState(100);
  const totalBalance = useState(5000);
  const yearlyEarnings = useState(0);
  const newYearNum = useState(0);
  const dispatch = useDispatch();
  const user_id = useSelector(store => store.user.id)

  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: {userId: user_id}});
  }, [dispatch, user_id]);
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
      { newYearNum ? <button>Year {newYearNum}</button> : <button>Year 1</button>}<br />
      <div>Total Balance: {totalBalance}</div><br />
      <div>Yearly Earnings: {yearlyEarnings}</div>
    </div>
  );
}

export default GamePage;
