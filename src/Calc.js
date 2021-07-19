import React, { Component } from 'react';

var num = [0];
var oper = "";
var i = 0;
var equa = "";

function reset() {
    num = [0];
    oper = "";
    i = 0;    
	equa = "";
}

function number(ele){
    num[i] = num[i]*10 + ele;
    equa = equa + ele;
	console.log(equa);
}
function operator(ele){
    oper += ele;
    num.push(0);
    i++;
    equa = equa + ele;
	console.log(equa);
}

function cal(){
    var result = num[0];
    for(var j=1;j<=i;j++){
        switch(oper[j-1]){
            case "+":
                result += num[j];
                break;
            case "-":
                result -= num[j];
                break;
            case "x":
                result *= num[j];
                break;
            case "%":
                result /= num[j];
                break;
        }
    }
    oper = "";
    i = 0;
	equa = equa + " = " + result;
}


class Calc extends Component {
	/*constructor(props) {	
		super(props);
		this.state = {
			num: [0],
			oper: "",
			i: 0,
			equa: ""
		};
	}
*/
	render() {
		
		return (
			<div className="calc">
				<div className="calc__title">Calculator</div>
				<div className="calc__score">{this.equa}</div>
				<div className="calc__keyboard">
					<div className="calc__keyboard__main">
						<div className="button calc__keyboard__ac" onClick={reset()}>AC</div>
						<div class="calc__keyboard__number">
							<div class="calc__keyboard__number__line">
								<div class="button button--blue" onClick={number(1)}>1</div>
								<div class="button button--blue" onClick={number(2)}>2</div>
								<div class="button button--blue"onClick={number(3)}>3</div>
							</div>
							<div class="calc__keyboard__number__line">
								<div class="button button--blue" onClick={number(4)}>4</div>
								<div class="button button--blue" onClick={number(5)}>5</div>
								<div class="button button--blue" onClick={number(6)}>6</div>
							</div>
							<div class="calc__keyboard__number__line">
								<div class="button button--blue" onClick={number(7)}>7</div>
								<div class="button button--blue" onClick={number(8)}>8</div>
								<div class="button button--blue" onClick={number(9)}>9</div>
							</div>
						</div>
						<div className="button button--blue--big" onClick={number(0)}>0</div>
					</div>
					<div className="calc__keyboard__operator">
						<div className="button button--deepblue" onClick={operator('+')}>+</div>
						<div className="button button--deepblue" onClick={operator('-')}>-</div>
						<div className="button button--deepblue" onClick={operator('x')}>×</div>
						<div className="button button--deepblue" onClick={operator('%')}>÷</div>
						<div className="button button--pink" onClick={cal()}>=</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Calc;
