export enum STATUS {
	INWORKING = "inworking",
	SOLVED = "solved"
}
export type ITicket = {
	id: number;
	mticode: string;
	status: STATUS;
	info: string;
	img?: string;
	date: number;
};
