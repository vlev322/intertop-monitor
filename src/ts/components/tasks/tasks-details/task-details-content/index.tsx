import React from "react";

export const TaskDetailsContent = ({ id, info, status, img }) => {
	return (
		<div className="entityDetails-content">
			<div>#{id}</div>
			<div className="entityDetails-content-task">
				<div className="section section-status">
					{/* colors for status section solved - #BBF4D8 | inProgress - #FBC9C9*/}
					<div className="section-control">
						<p className="section-title">Status:</p>
						<button className="button">change</button>
					</div>
					{status}
				</div>
				<div className="section ">
					<p className="section-title">Description:</p>
					<section className="section-info">
						{info}DeseruntReprehenderit proident proident incididunt esse. Anim excepteur laboris ad nulla aliquip
						culpa. Laborum aliquip non duis dolor dolor laboris deserunt ullamco sit consequat eiusmod id. Excepteur
						proident sit velit proident consequat amet do minim magna id tempor aliqua velit. Nisi est in nostrud
						voluptate sit qui sunt aute in exercitation. aliquip laboris cillum velit est non.
					</section>
				</div>
				<div className="section">
					<p className="section-title">Images:</p>
					{img}
				</div>
				<div className="section">
					<button className="button">add answer</button>
				</div>
			</div>
		</div>
	);
};
