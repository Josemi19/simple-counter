//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import PropsType from "prop-types";

function Counter(props) {
	return (
		<>
			<div className="reloj">
				<div className="clock">
					<i className="fa fa-clock" />
				</div>
				<div className="fourth">{props.fourth % 10}</div>
				<div className="third">{props.third % 10}</div>
				<div className="second">{props.second % 10}</div>
				<div className="first">{props.first % 10}</div>
			</div>
		</>
	);
}
Counter.propsType = {
	first: PropsType.number,
	second: PropsType.number,
	third: PropsType.number,
	fourth: PropsType.number,
};

let seconds = 0;
setInterval(() => {
	let firstDigit = Math.floor(seconds / 1);
	let secondDigit = Math.floor(seconds / 10);
	let thirdDigit = Math.floor(seconds / 100);
	let fourthDigit = Math.floor(seconds / 1000);
	seconds++;
	//render your react application
	ReactDOM.render(
		<Counter
			first={firstDigit}
			second={secondDigit}
			third={thirdDigit}
			fourth={fourthDigit}
		/>,
		document.querySelector("#app")
	);
}, 1000);
