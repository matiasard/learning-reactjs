import { useFetch } from "../hooks";
import { Loading, Quotes } from "./index";

export const MultipleCustomHooks = () => {
	const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";

	const { data, isLoading, hasError, getFetch } = useFetch(url);
	// ->                              False/True && True
	const { author, quote, category } = !!data && data[0];

	const onNewQoute = () => {
		getFetch();
	};

	return (
		<>
			<h1>MultipleCustomHooks</h1>
			<hr />
			<div className="mb-4 row gx-2">
				<h2 className="h3 col-auto">Category:</h2>
				<div className="col-auto">
					<button
						onClick={() => getFetch("art")}
						disabled={isLoading}
						className="btn btn-primary "
					>
						Art
					</button>
				</div>
				<div className="col-auto">
					<button
						onClick={() => getFetch("money")}
						disabled={isLoading}
						className="btn btn-primary col"
					>
						Money
					</button>
				</div>
				<div className="col-auto">
					<button
						onClick={() => getFetch("birthday")}
						disabled={isLoading}
						className="btn btn-primary col"
					>
						Birthday
					</button>
				</div>
			</div>

			{/* {isLoading && (
				<div className="alert alert-info text-center h4">Loading...</div>
			)} */}

			{isLoading ? (
				<Loading />
			) : (
				<Quotes author={author} quote={quote} category={category} />
			)}

			<button
				onClick={onNewQoute}
				disabled={isLoading}
				className="btn btn-primary"
			>
				Next Qoute
			</button>
		</>
	);
};
