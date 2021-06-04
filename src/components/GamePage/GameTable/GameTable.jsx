import { useSelector } from "react-redux";


function GameTable() {

    let currentYear = useSelector(store => store.setNewYear);
    
    return (
        <div className="container">
            <table id="stockboard">
                <thead>
                    <tr>
                        <th className="stockheader">Stocks</th>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<th key={i}>Year: {yearData.year_number}</th>)
                        }): <td type="hidden"></td>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="stockname">
                        <span id="stockname_1">Central City Bonds</span><br />
                        <div className="yieldstyle">YIELD 5%</div>
                        <input type="hidden" value={100} id="value_0_1" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>100</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname" >
                        <span id="stockname_2">Growth Corp</span><br />
                        <div className="yieldstyle">YIELD 1%</div>
                        <input type="hidden" value={100} id="value_0_2" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[0]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname">
                        <span id="stockname_3">Metro Prop</span><br />
                        <div className="yieldstyle">NO YIELD</div>
                        <input type="hidden" value={100} id="value_0_3" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[1]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname" >
                        <span id="stockname_4">Pioneer Mutl</span><br />
                        <div className="yieldstyle">YIELD 4%</div>
                        <input type="hidden" value={100} id="value_0_4" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[2]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname">
                        <span id="stockname_5">Shady Brooks</span><br />
                        <div className="yieldstyle">YIELD 7%</div>
                        <input type="hidden" value={100} id="value_0_5" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[3]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname" >
                        <span id="stockname_6">Stryker Drlg</span><br />
                        <div className="yieldstyle">NO YIELD</div>
                        <input type="hidden" value={100} id="value_0_6" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[4]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname">
                        <span id="stockname_7">Tri City Trans</span><br />
                        <div className="yieldstyle">NO YIELD</div>
                        <input type="hidden" value={100} id="value_0_7" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[5]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname" >
                        <span id="stockname_8">United Auto</span><br />
                        <div className="yieldstyle">YIELD 2%</div>
                        <input type="hidden" value={100} id="value_0_8" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[6]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname">
                        <span id="stockname_9">Uranium Ent</span><br />
                        <div className="yieldstyle">YIELD 6%</div>
                        <input type="hidden" value={100} id="value_0_9" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[7]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                    <tr>
                        <td className="stockname" >
                        <span id="stockname_10">Valley Power</span><br />
                        <div className="yieldstyle">YIELD 3%</div>
                        <input type="hidden" value={100} id="value_0_10" />
                        </td>
                        {currentYear ? currentYear.map((yearData, i) => {
                            return (<td key={i}>{yearData.value[8]}</td>)
                            }): <td type="hidden"></td>}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GameTable;