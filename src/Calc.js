import React, {useState} from "react";
import NumButton from "./NumButton";



function Calc({ onChangePage }) {
  const [operandA, setOperandA] = useState('');
  const [operandB, setOperandB] = useState('');
  const [operator, setOperator] = useState('');
  
  const onNumInput = (num) => {
    if(operator === ''){
      setOperandA(operandA + num);
    } else {
      setOperandB(operandB + num);
    }
  }
  
  const onOperatorInput = (oper) => {
    if(operandA !== ''){
      setOperator(oper);
    }
  }
  
  const onCalc = () => {
    let result;
    console.log(result);
    switch(operator){
      case  '+':
        result = Number(operandA) + Number(operandB);
        break;
      case  '-':
        result = Number(operandA) - Number(operandB);
        break;
      case  '×':
        result = Number(operandA) * Number(operandB);
        break;
      case  '÷':
        result = Number(operandA) / Number(operandB);
        break;
    }
    onChangePage(operandA+operator+operandB+'='+result);
    setOperandA(result);
    setOperandB('');
    setOperator('');
  }

  const onAC = () => {
    setOperandA('');
    setOperandB('');
    setOperator('');
  }
  
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{operandA + operator + operandB}</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac" onClick={onAC}>AC</div>
          <div class="calc__keyboard__number">
            <div class="calc__keyboard__number__line">
              { Array(3).fill(null).map((e, idx) => <NumButton onClick={() => onNumInput(String(idx + 1))} value={idx + 1} />)}
            </div>
            <div class="calc__keyboard__number__line">
              { Array(3).fill(null).map((e,idx) => <NumButton onClick={() => onNumInput(String(idx + 4))} value={idx + 4} />)}
            </div>
            <div class="calc__keyboard__number__line">
              { Array(3).fill(null).map((e,idx) => <NumButton onClick={() => onNumInput(String(idx + 7))} value={idx + 7} />)}
            </div>
            <NumButton onClick={() => onNumInput('0')} value={0} />
          </div>
        </div>
        <div className="calc__keyboard__operator">
            {['+', '-', '×', '÷'].map(elem => (
							<div onClick={() => onOperatorInput(elem)} className="button button--deepblue">{elem}</div>
						))}
          <div className="button button--pink" onClick={() => onCalc()}>=</div>
        </div>
      </div>
  </div>
  );
}

export default Calc;
