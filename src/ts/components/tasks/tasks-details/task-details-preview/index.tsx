import React from "react";

export const TaskDetailsPreview = ({ date, mticode, city, brand, shopNumber }): JSX.Element => {
	return (
		<div className="entityDetails-preview">
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{brand}</div>
			<div>{shopNumber}</div>
			<div>{date}</div>
		</div>
	);
};
