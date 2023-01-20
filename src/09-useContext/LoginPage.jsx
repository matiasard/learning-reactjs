import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
	const { user, loginUser } = useContext(UserContext);
	console.log(user);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 2)}</pre>

			<button
				onClick={() => loginUser({ nombre: "Gabi", email: "gab@gmail.com" })}
				className="btn btn-primary"
			>
				Establecer Usuario
			</button>
		</>
	);
};
