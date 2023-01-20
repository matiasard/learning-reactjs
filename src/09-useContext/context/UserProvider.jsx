import { useState } from "react";
import { UserContext } from "./userContext";

// const user = {
// 	name: "Matias",
// 	age: 36,
// 	email: "matias@gmail.com",
// };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const loginUser = (user = {}) => {
		setUser(user);
	};

	return (
		<UserContext.Provider value={{ user, loginUser }}>
			{children}
		</UserContext.Provider>
	);
};
