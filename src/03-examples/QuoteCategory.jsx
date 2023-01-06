export const QuoteCategory = ({ isLoading, category, getFetch }) => {
	const categoryClean = category[0].toUpperCase() + category.slice(1);
	return (
		<button
			onClick={() => getFetch(category)}
			disabled={isLoading}
			className="btn btn-primary "
		>
			{categoryClean}
		</button>
	);
};
