import React from "react";

import { KiosksTable } from "./kiosks-table";
import { TableHeader } from "../list-header";
import { KIOSKS_HEADER } from "../list-header/caseHeader";

export const Kiosks = () => (
	<div className="kiosks">
		<TableHeader VARIANT_HEADER={KIOSKS_HEADER} />
		<KiosksTable />
	</div>
);
