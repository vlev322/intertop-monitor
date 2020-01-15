export interface ITableHeader {
	[index: number]: string;
}
export const KIOSKS_HEADER: ITableHeader = ["ID", "MTICODE", "CITY", "IP", "STATUS", "INFO"];
export const TASKS_HEADER: ITableHeader = ["ID", "MTICODE", "CITY", "IMAGE", "DATE", "STATUS", "INFO"];
