import CityDecode from "../../data/decode/cityDecode";
import BrandDecode from "../../data/decode/monoBrandDecode";

interface IDecode {
	city: string;
	brand: string;
	shopNumber: number;
}

export function decodeMticode(mticode: string): IDecode {
	if (!mticode) {
		return {
			city: "",
			brand: "",
			shopNumber: 0
		};
	}

	const cityCode = mticode.slice(3, 5);
	const shopCode = mticode.slice(0, 3);
	const city = CityDecode[cityCode]?.name || "";
	const brand = BrandDecode[shopCode] ? BrandDecode[shopCode][0] : "";
	const shopNumber = +mticode.slice(5, 7);

	return {
		city,
		brand,
		shopNumber
	};
}
