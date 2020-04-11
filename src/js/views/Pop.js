import React, { useContext } from "react";
import { People } from "./../component/People";
import { Planet } from "./../component/Planet";
import { Context } from "./../store/appContext";
import PropTypes from "prop-types";

export const Pop = props => {
	const { store } = useContext(Context);

	// put an if is underfine to throw a message
	const character = store.people.find(p => props.match.params.id == p.id);

	console.log("test", character);

	return (
		<div className="container">
			<div className="row">
				<div className="col-6" />
				<div className="text-light">{character.name}</div>
				<div className="text-light">{character.description}</div>
			</div>
		</div>
	);
};

Pop.propTypes = { history: PropTypes.object, match: PropTypes.object };
