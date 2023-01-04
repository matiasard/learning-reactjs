import { useEffect, useState } from "react";
// URL de la API: https://rapidapi.com/apininjas/api/quotes-by-api-ninjas/

export const useFetch = (url) => {
	// const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes"
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async (category = "") => {
		setState({ ...state, isLoading: true });

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c",
				"X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
			},
		};
		//? Si parametro Category no es vacio....
		// True/False && True
		!!category && (options.params = { category });
		const urlClean = !!category ? `${url}?category=${category}` : url;
		const resp = await fetch(urlClean, options);
		const data = await resp.json(resp);
		setState({ ...state, data, isLoading: false });
	};

	useEffect(() => {
		getFetch();
	}, []);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
		getFetch,
	};
};
