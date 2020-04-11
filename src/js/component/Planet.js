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
								<img
									className="card-img-top"
									src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
									alt="Card image cap"
								/>
								<Link to={`/pop/${info.title}`}>{info.title}</Link>
							</div>
						</div>
					);
				})}
		</>
	);
};
