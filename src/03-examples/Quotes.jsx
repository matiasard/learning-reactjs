import React from "react";

export const Quotes = ({ author, quote, category }) => {
	return (
		<blockquote className="blockquote text-center">
			<p>{quote}</p>
			<figcaption className="blockquote-footer">
				<cite title="Source Title text-end">
					{author} ({category})
				</cite>
			</figcaption>
		</blockquote>
	);
};
