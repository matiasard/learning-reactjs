import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(0);

	const incrementFather = useCallback((number) => {
		setCounter((value) => value + number);
	}, []);

	// useEffect(() => {
	// 	incrementFather();
	// }, [incrementFather]);

	return (
		<>
			<h1 className="mt-4">useCallback Hook: {counter}</h1>
			<hr />
			<ShowIncrement increment={incrementFather} />
		</>
	);
};
