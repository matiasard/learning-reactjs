import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const HomePage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>HomePage</h1>
			<h5>{user?.name}</h5>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
};
