import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
	const { counter, increment, reset, decrement } = useCounter();

	return (
		<>
			<h1 className="my-3">Counter With Custom Hook: {counter}</h1>

			<div className="d-flex gx-4">
				<button onClick={() => decrement(2)} className="btn btn-primary btn-lg">
					-1
				</button>
				<button onClick={reset} className="btn btn-primary btn-lg">
					Reset
				</button>
				<button onClick={() => increment(2)} className="btn btn-primary btn-lg">
					+1
				</button>
			</div>
		</>
	);
};
