import React from "react";

function History({history}) {
  console.log(history);
  let i = 0;
  let data = history;
  let hlist = [];

  while(i < data.length){
    hlist.push(
      <tr>
        <td>{data[i]}</td>
      </tr>
    )
    i = i + 1;
  }
  return (
    <div className="history">
      <div className="history__title">History</div> 
      <table className="history__table">
        {hlist}
      </table>
    </div>
  );
}

export default History;
