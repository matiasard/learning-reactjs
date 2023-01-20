import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const AboutPage = () => {
	const { user } = useContext(UserContext);
	console.log(user);

	return (
		<>
			<h1>AboutPage</h1>
			<p>{user?.name}</p>
		</>
	);
};
