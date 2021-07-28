import React, { useState } from 'react';
import './calculate.scss';
import Calc from './Calc';
import History from './History';


function App() {
  const [histories, setHistories] = useState([]);
  return (
    <div className="App">
      <div className="Container">
        <Calc onChangePage={function(equa){
							setHistories(histories.concat(equa))
					}}/>
        <History history={histories} />
      </div>
    </div>
  );
}

export default App;
