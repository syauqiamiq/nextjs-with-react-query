import { ClassAPI } from "@api/class.api";
import { Class } from "@interfaces/class";
import Link from "next/link";
import { useQuery } from "react-query";

type HomePageProps = {
	classData: Class[];
};

const HomePage = ({ classData: propClass }: Partial<HomePageProps>) => {
	const classAPI = new ClassAPI();
	const {
		data: classData,
		isFetching,
		isLoading,
	} = useQuery<Class[], Error>("class", classAPI.getAllClass, {
		initialData: propClass,
	});

	return (
		<div>
			<Link href="/tes">
				<button style={{ width: 200, height: 50 }}>ADD DATA</button>
			</Link>
			{/* {loadingCreate ? (
				"..Creating Data"
			) : (
				<button
					onClick={() =>
						createClass({
							name: "KELAS BARU LAGI",
							class_description: "INI DESCRIPTION",
						})
					}
					style={{ width: 200, height: 50 }}
				>
					ADD DATA
				</button>
			)} */}

			{/* {loadingUpdate ? (
				"..Update Data"
			) : (
				<button
					onClick={() =>
						updateClass({
							id: 5,
							name: "KELAS DIUPDATE",
							class_description: "INI DESCRIPTION UPDATED",
						})
					}
					style={{ width: 200, height: 50 }}
				>
					UPDATE DATA
				</button>
			)} */}

			{/* {loadingDelete ? (
				"..Delete Data"
			) : (
				<button
					onClick={() =>
						deleteClass({
							id: 5,
						})
					}
					style={{ width: 200, height: 50 }}
				>
					DELETE DATA
				</button>
			)} */}
			{isFetching && "REVALIDATE AUTOMATIC"}
			{isLoading ? (
				"...Loading"
			) : (
				<div>
					{classData?.map((value, i) => (
						<div key={i}>
							<h1 style={{ color: "white" }}>{value.name}</h1>
							<h6 style={{ color: "white" }}>{value.class_description}</h6>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default HomePage;
