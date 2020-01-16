import React from "react";

import { KioskDetailsPreview } from "./kiosk-details-preview";
import { TableHeader } from "../../list-header";
import { TASKS_HEADER } from "../../list-header/caseHeader";
import { EntityDetailsTable } from "./kiosk-details-table";

export const KioskDetails = ({ _mticode }) => {
	return (
		<div className="entityDetails">
			<KioskDetailsPreview _mticode={_mticode} />
			<TableHeader VARIANT_HEADER={TASKS_HEADER} />
			<EntityDetailsTable _mticode={_mticode} />
		</div>
	);
};
