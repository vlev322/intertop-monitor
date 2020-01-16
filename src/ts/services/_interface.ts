export interface IKiosk {
	id: number;
	mticode: string;
	ip: string;
	city: string;
}
export interface ITask {
	id: number;
	city: string;
	img: string;
	info: string;
	date: number;
	status: string;
	mticode: string;
}
