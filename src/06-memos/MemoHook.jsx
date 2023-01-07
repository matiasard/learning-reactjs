import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (interatorNumber = 100) => {
	for (let i = 0; i < interatorNumber; i++) {
		console.log("Ahí vamos...");
	}

	return `${interatorNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
	const { counter, increment, reset, decrement } = useCounter(1000);
	const [show, setShow] = useState(true);
	const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<div>
			<h1>
				Counter: <Small value={counter} />
			</h1>
			<hr />

			<h4>{memorizeValue}</h4>

			<button onClick={() => increment(1)} className="btn btn-primary">
				+1
			</button>
			<button
				onClick={() => setShow(!show)}
				className="btn btn-outline-primary"
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
