import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
	const { counter, increment, reset, decrement } = useCounter();
	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>
				Counter: <Small value={counter} />
			</h1>
			<hr />

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
