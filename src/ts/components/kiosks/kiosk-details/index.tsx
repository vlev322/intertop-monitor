import React from "react";

import { KioskDetailsPreview } from "./kiosk-details-preview";
import { TableHeader } from "../../list-header";
import { TICKETS_HEADER } from "../../list-header/caseHeader";
import { EntityDetailsTable } from "./kiosk-details-table";

export const KioskDetails = ({ _mticode }) => {
	return (
		<div className="entityDetails">
			<KioskDetailsPreview _mticode={_mticode} />
			<TableHeader VARIANT_HEADER={TICKETS_HEADER} />
			<EntityDetailsTable _mticode={_mticode} />
		</div>
	);
};
