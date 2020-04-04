import React, { useContext } from "react";
import { navbar } from "./../component/navbar";
import { footer } from "./../component/footer";
import { Context } from "./../store/appContext";
export const Home = () => {
	const { store } = useContext(Context);
	console.log("people", store.people);
	return (
		<>
			<navbar />
			hello world
			<footer />
		</>
	);
};
