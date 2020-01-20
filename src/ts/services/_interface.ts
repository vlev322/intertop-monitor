export type IKiosk = {
	id: number;
	mticode: string;
	host: string;
	city: string;
};
export type ITask = {
	id: number;
	city: string;
	img: string;
	info: string;
	date: number;
	status: string;
	mticode: string;
};
