import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Plants",
	"Games",
	"Computer Programing",
	"Editing",
	"All",
	"Plants",
	"Games",
	"Computer Programing",
	"Editing"
];

const ButtonList = () => {
	return (
		<div className="flex">
			{list.map((item, index) => (
				<Button key={index} title={item} />
			))}
		</div>
	);
};

export default ButtonList;
