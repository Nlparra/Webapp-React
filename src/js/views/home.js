import React, { useContext } from "react";
import { Navbar } from "./../component/navbar";
import { Footer } from "./../component/footer";
import { Context } from "./../store/appContext";
export const Home = () => {
	const { store } = useContext(Context);
	console.log("people", store.people);

	return (
		<>
			<div>
				<h1>Characters</h1>
				{store.people &&
					store.people.map((info, index) => {
						return (
							<div key={index} className="card" style={{ width: "18rem" }}>
								<img
									src="http://placehold.it/200x200"
									className="card-img-top img-fluid"
									alt="character photo"
								/>
								<div className="card-body">
									<h2>{info.name}</h2>
									<div className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card &#39;s
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
