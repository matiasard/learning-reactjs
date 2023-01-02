import { useEffect, useState } from "react";
// URL de la API: https://rapidapi.com/apininjas/api/quotes-by-api-ninjas/

export const useFetch = (url) => {
	// const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes"

	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		setState({ ...state, isLoading: true });

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "2272da370bmsh959fdd726380f99p1b51d0jsnd82d9badb07c",
				"X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
			},
		};
		const resp = await fetch(url, options);
		const data = await resp.json(resp);

		setState({ ...state, data, isLoading: false });
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
