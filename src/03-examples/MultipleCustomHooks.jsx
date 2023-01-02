import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
	const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";

	const { data, isLoading, hasError } = useFetch(url);
	console.log(data, isLoading, hasError);
	//                                 False/True && True
	const { author, quote, category } = !!data && data[0];

	return (
		<>
			<h1>MultipleCustomHooks</h1>
			<hr />

			{/* {isLoading && (
				<div className="alert alert-info text-center h4">Loading...</div>
			)} */}
			{isLoading ? (
				<div className="alert alert-info text-center h4">Loading...</div>
			) : (
				<blockquote className="blockquote text-center">
					<p>{quote}</p>
					<figcaption className="blockquote-footer">
						<cite title="Source Title text-end">{author}</cite>
					</figcaption>
				</blockquote>
			)}
		</>
	);
};
