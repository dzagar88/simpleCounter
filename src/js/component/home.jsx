import React, { useState } from "react";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);
	const countUp = () => (
		setCount(count + 1)
	)

	const countDown = () => (
		setCount(count - 1)
	)

	return (
		<div className="text-center">
			<div className="main">
				<h1>Check out my Counter:</h1><br></br>
				<h3>{count}</h3>
				<br></br>
				<button onClick={countUp} className="btn btn-success me-3 button1">Up</button>
				<button onClick={countDown} className="btn btn-danger me-3 button1">Down</button>
			</div>
		</div>
	);
};

export default Home;
