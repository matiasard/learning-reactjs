import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
	const { username, email, password, formState, onInputChange } = useForm({
		username: "matia",
		email: "matia@gmail.com",
		password: "123",
	});

	// const { username, email, password } = formState;

	return (
		<>
			<h1 className="my-4">Formulario con Custom Hook</h1>

			<input
				type="text"
				className="form-control"
				placeholder="User Name"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			{/* {username === "matia2" && <Message />} */}

			<input
				type="email"
				className="form-control mt-4"
				placeholder="email"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			<input
				type="password"
				className="form-control mt-4"
				placeholder="password"
				name="password"
				value={password}
				onChange={onInputChange}
			/>
		</>
	);
};
