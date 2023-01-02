// import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () => {
	const { username, email, password, formState, onInputChange, onResetFrom } =
		useForm({
			username: "",
			email: "",
			password: "",
		});

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

			<button onClick={onResetFrom} className="btn btn-primary mt-3">
				Reset Form
			</button>
		</>
	);
};
