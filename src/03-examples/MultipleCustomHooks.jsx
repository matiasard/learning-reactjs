import { useFetch } from "../hooks";
import { Loading, Quotes, QuoteCategory } from "./index";

export const MultipleCustomHooks = () => {
	const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";

	const { data, isLoading, hasError, getFetch } = useFetch(url);
	// --->                            False/True && True
	const { author, quote, category } = !!data && data[0];
	const categories = [
		"art",
		"money",
		"birthday",
		"change",
		"computers",
		"experience",
		"fitness",
		"family",
		"humor",
	];

	const onNewQuote = () => {
		getFetch();
	};

	return (
		<>
			<h1 className="mt-4">MultipleCustomHooks</h1>
			<hr />

			<div className="mb-4 row g-2">
				<h2 className="h3 col-auto">Category:</h2>

				{categories.map((categ) => {
					return (
						<div className="col-auto" key={categ}>
							<QuoteCategory
								category={categ}
								isLoading={isLoading}
								getFetch={getFetch}
							/>
						</div>
					);
				})}
			</div>

			{isLoading ? (
				<Loading />
			) : (
				<Quotes author={author} quote={quote} category={category} />
			)}

			<button
				onClick={onNewQuote}
				disabled={isLoading}
				className="btn btn-primary"
			>
				Random Quote
			</button>
		</>
	);
};
