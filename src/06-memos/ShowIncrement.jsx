import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
	console.log("Me volvi a generar :c");

	return (
		<button onClick={() => increment(2)} className="btn btn-primary">
			Incrementar
		</button>
	);
});
