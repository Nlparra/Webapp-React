import React, { useContext } from "react";
import { People } from "./../component/People";
import { Planet } from "./../component/Planet";
import { Context } from "./../store/appContext";

export const Pop = props => {
	const { store } = useContext(Context);
	console.log(props);

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">Hello World</div>
			</div>
		</div>
	);
};
