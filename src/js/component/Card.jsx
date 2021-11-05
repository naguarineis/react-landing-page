import React from "react";
import Asset from "../../img/500x325.png";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img src={Asset} className="card-img-top" alt="..." />
				<div className="card-body container-fluid text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttonLabel: PropTypes.string
};
