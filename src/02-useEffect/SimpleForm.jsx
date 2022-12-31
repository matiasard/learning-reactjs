import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "matia",
		email: "matia@gmail.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		// console.log(name, value);
		setFormState({ ...formState, [name]: value });
	};

	// solo cuando el Email es cambiado
	// useEffect(() => {
	// 	console.log("email is changed");
	// }, [email]);

	return (
		<>
			<h1 className="my-4">Formulario Simple</h1>
			<input
				type="text"
				className="form-control"
				placeholder="User Name"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			{username === "matia2" && <Message />}

			<input
				type="email"
				className="form-control mt-4"
				placeholder="email"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};
