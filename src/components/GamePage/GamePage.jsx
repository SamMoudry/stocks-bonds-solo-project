import React, {useState} from 'react';
import './GamePage.css'

function GamePage() {
  const value = useState(100);
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
            <input type="hidden" value={value} id="value_0_1" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_2">Growth Corp</span><br />
            <div className="yieldstyle">YIELD 1%</div>
            <input type="hidden" value="100" id="value_0_2" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_3">Metro Prop</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value="100" id="value_0_3" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_4">Pioneer Mutl</span><br />
            <div className="yieldstyle">YIELD 4%</div>
            <input type="hidden" value="100" id="value_0_4" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_5">Shady Brooks</span><br />
            <div className="yieldstyle">YIELD 7%</div>
            <input type="hidden" value="100" id="value_0_5" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_6">Stryker Drlg</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value="100" id="value_0_6" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_7">Tri City Trans</span><br />
            <div className="yieldstyle">NO YIELD</div>
            <input type="hidden" value="100" id="value_0_7" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_8">United Auto</span><br />
            <div className="yieldstyle">YIELD 2%</div>
            <input type="hidden" value="100" id="value_0_8" />
          </td>
        </tr>
        <tr>
          <td className="stockname">
            <span id="stockname_9">Uranium Ent</span><br />
            <div className="yieldstyle">YIELD 6%</div>
            <input type="hidden" value="100" id="value_0_9" />
          </td>
        </tr>
        <tr>
          <td className="stockname" >
            <span id="stockname_10">Valley Power</span><br />
            <div className="yieldstyle">YIELD 3%</div>
            <input type="hidden" value="100" id="value_0_10" />
          </td>
        </tr>
        </tbody>
      </table><br />
    </div>
  );
}

export default GamePage;
