import React, { useContext } from "react";
import { People } from "./../component/People";
import { Comic } from "../component/Comic";
import { Context } from "./../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<h1>Characters</h1>
			<div className="scrolling-wrapper">
				<People />
			</div>
			<h1 className="mt-5">Comics</h1>
			<div className="scrolling-wrapper-comics">
				<Comic />
			</div>
		</>
	);
};
