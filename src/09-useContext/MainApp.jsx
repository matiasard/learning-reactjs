import { Link, Navigate, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/userProvider";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>Main APP</h1>
			<hr />
			<Navbar />
			<hr />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<Navigate to={"/"} />} />
			</Routes>
		</UserProvider>
	);
};
