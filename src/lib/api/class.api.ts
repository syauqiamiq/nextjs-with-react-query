import { Class } from "@interfaces/class";
import axios from "axios";

export class ClassAPI {
	getAllClass = async () => {
		const res = await axios.get(
			"https://63a4527d2a73744b00740d48.mockapi.io/api/v1/class"
		);
		return res.data;
	};

	createClass = async (data: Class) => {
		const res = await axios.post(
			"https://63a4527d2a73744b00740d48.mockapi.io/api/v1/class",
			data
		);
		return res.data;
	};

	updateClass = async (data: Class) => {
		const res = await axios.put(
			`https://63a4527d2a73744b00740d48.mockapi.io/api/v1/class/${data.id}`,
			data
		);
		return res.data;
	};
	deleteClass = async ({ id }: { id: number }) => {
		const res = await axios.delete(
			`https://63a4527d2a73744b00740d48.mockapi.io/api/v1/class/${id}`
		);
		return res.data;
	};
}
