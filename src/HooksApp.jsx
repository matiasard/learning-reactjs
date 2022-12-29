// import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

export const HooksApp = () => {
	return (
		<>
			<h1 className="mt-5">Hooks</h1>
			{/* <CounterApp /> */}
			<CounterWithCustomHook />
		</>
	);
};
