import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
	return (
		<>
			<div className="jumbotron mx-5 bg-light p-5 my-2">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.text}</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.buttonLabel}
				</a>
			</div>
		</>
	);
};

export default Hero;

Hero.propTypes = {
	text: PropTypes.string,
	title: PropTypes.string,
	buttonLabel: PropTypes.string
};
