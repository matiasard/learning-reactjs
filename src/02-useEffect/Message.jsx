import { useEffect, useState } from "react";

export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			console.log({ x, y });
			setCoords({ x, y });
		};
		console.log("Message Montado");
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			console.log("Message DesMontado");
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
			{JSON.stringify(coords)}
		</>
	);
};
