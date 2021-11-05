import React from "react";
import Asset from "../../img/500x325.png";
import PropTypes from "prop-types";

import Card from "./Card.jsx";

const CardArray = () => {
	return (
		<>
			<div className="d-flex justify-content-between my-2 mx-5">
				<Card
					title="Card title 1"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Libero quo temporibus harum dolor eaque pariatur
                    beatae eligendi ratione."
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card title 2"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Libero quo temporibus harum dolor eaque pariatur
                    beatae eligendi ratione."
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card title 3"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Libero quo temporibus harum dolor eaque pariatur
                    beatae eligendi ratione."
					buttonLabel="Find out more!"
				/>
				<Card
					title="Card title 4"
					text="Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Libero quo temporibus harum dolor eaque pariatur
                    beatae eligendi ratione."
					buttonLabel="Find out more!"
				/>
			</div>
		</>
	);
};

export default CardArray;
