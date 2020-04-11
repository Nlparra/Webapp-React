import React, { useContext } from "react";
import { Context } from "./../store/appContext";
import { Link } from "react-router-dom";

export const Planet = () => {
	const { store } = useContext(Context);
	console.log("planet", store.planet);

	return (
		<>
			{store.planet &&
				store.planet.map((info, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem", height: "300px" }}>
							<div className="card-body">
								<Link to={`/pop/${info.title}`}>{info.title}</Link>
								<div className="card-text text-wrap">
									Some quick example text to build on the card title and make up the bulk of the card
									&#39;s
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};
