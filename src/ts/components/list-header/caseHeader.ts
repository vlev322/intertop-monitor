export interface ITableHeader {
	[index: number]: string;
}
export const KIOSKS_HEADER: ITableHeader = ["ID", "MTICODE", "BRAND", "SHOP", "CITY", "IP", "STATUS"];
export const TICKETS_HEADER: ITableHeader = ["ID", "MTICODE", "CITY", "DATE", "STATUS", "INFO"];
