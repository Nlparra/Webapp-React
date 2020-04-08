import React, { useContext } from "react";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import { Context } from "./../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
	const { store } = useContext(Context);
	console.log("people", store.people);

	return (
		<>
			<h1>Characters</h1>
			{store.people &&
				store.people.map((info, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<Link to={`/pop/${info.name}`}>{info.name}</Link>

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
