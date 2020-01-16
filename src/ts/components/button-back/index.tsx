import React from "react";
import { usePath, navigate } from "hookrouter";

export const Back = (): JSX.Element => {
	const path = usePath();

	const _onClick = () => {
		let hist = path.split("/");
		hist.pop();
		navigate(hist.join("/"));
	};
	return (
		<button onClick={_onClick} className="btn-back">
			Back
		</button>
	);
};
