import React, { useContext } from "react";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import { Context } from "./../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
	const { store } = useContext(Context);
	// console.log("people", store.people);

	return (
		<>
			{store.people &&
				store.people.map((info, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<img
									className="card-img-top"
									src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
									alt="Card image cap"
								/>
								<Link to={`/character/${info.id}`}>{info.name}</Link>
							</div>
						</div>
					);
				})}
		</>
	);
};
