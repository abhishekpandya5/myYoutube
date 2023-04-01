import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (!isMenuOpen) return null;

	return (
		<div className="col-span-2 max-w-xs shadow-lg">
			<ul className="border-b-2 mx-2">
				<li className="py-2">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="py-2">
					<span>Explore</span>
				</li>
				<li className="py-2">
					<span>Shorts</span>
				</li>
				<li className="py-2">
					<span>Subscription</span>
				</li>
			</ul>

			<ul className="border-b-2 mx-2">
				<li className="py-2">
					<span>Home</span>
				</li>
				<li className="py-2">
					<span>Explore</span>
				</li>
				<li className="py-2">
					<span>Shorts</span>
				</li>
				<li className="py-2">
					<span>Subscription</span>
				</li>
			</ul>

			<ul className="border-b-2 mx-2">
				<li className="py-2">
					<span>Home</span>
				</li>
				<li className="py-2">
					<span>Explore</span>
				</li>
				<li className="py-2">
					<span>Shorts</span>
				</li>
				<li className="py-2">
					<span>Subscription</span>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
