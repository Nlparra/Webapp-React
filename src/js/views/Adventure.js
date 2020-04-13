import React, { useContext } from "react";
import { Comic } from "../component/Comic";
import { Context } from "./../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Adventure = props => {
	const { store } = useContext(Context);

	// put an if is underfine to throw a message
	const comics = store.comic.find(p => props.match.params.id == p.id);
	console.log("still", comics);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6" />
				</div>
				<div className="card mb-3">
					<img
						src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{comics.title}</h5>
						<p className="card-text">{comics.description}</p>
						<p className="card-text">
							<small className="text-muted">
								Issue #:
								{comics.issueNumber}
							</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

Adventure.propTypes = { history: PropTypes.object, match: PropTypes.object };
