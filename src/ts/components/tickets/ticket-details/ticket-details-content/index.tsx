import React, { useState, useEffect } from "react";

import { ITicket as props } from "../../_types";
import { DynamicSelectStatus } from "../status-widget";

export const TicketDetailsContent = ({ id, info, status, img, date, mticode }: props) => {
	const [ticketStatus, setStatus] = useState(status);
	const [isEditStatus, setEdit] = useState(false);

	const handleEditable = () => {
		setEdit(!isEditStatus);
	};

	return (
		<div className="entityDetails-content">
			<div>
				#{id}
				<hr />
				<h2>Date - {date}</h2>
			</div>
			<div className="entityDetails-content-task">
				<div className={`section section-status-${ticketStatus}`}>
					<div className="section-control">
						<p className="section-title">Status:</p>
						<p className="section-status-title">{ticketStatus}</p>
						<div>
							<button onClick={handleEditable} className="button">
								{isEditStatus ? "Save" : "Change status"}
							</button>
							{isEditStatus ? <DynamicSelectStatus currentStatus={ticketStatus} onSelectChange={setStatus} /> : ""}
						</div>
					</div>
				</div>
				<div className="section ">
					<p className="section-title">Description:</p>
					<section className="section-info">
						{info} - TEMPLATE -_-_-> DeseruntReprehenderit proident proident incididunt esse. Anim excepteur laboris ad
						nulla aliquip culpa. Laborum aliquip non duis dolor dolor laboris deserunt ullamco sit consequat eiusmod id.
						Excepteur proident sit velit proident consequat amet do minim magna id tempor aliqua velit. Nisi est in
						nostrud voluptate sit qui sunt aute in exercitation. aliquip laboris cillum velit est non.
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
