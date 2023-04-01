import React, { useEffect, useState } from "react";
import HamburgerIcon from "../assets/images/hamburger-menu-icon.svg";
import Logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(true);
	const searchCache = useSelector((store) => store.search.cache);
	const dispatch = useDispatch();

	useEffect(() => {
		/* 
			make an API call after every key press
			but if the difference btw 2 API calls is < 200ms
			decline the API call.
		*/
		const getSearchSuggestion = async () => {
			// console.log("API_call ", searchQuery);
			const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
			const json = await data.json();
			setSuggestions(json[1]);
			dispatch(
				cacheResults({
					[searchQuery]: json[1]
				})
			);
		};

		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestion();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const handleToggleMenu = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col items-center p-2 shadow-md">
			<div className="left-header-section flex gap-5">
				<img
					src={HamburgerIcon}
					alt="toggle-icon"
					className="w-5 ml-2 cursor-pointer"
					onClick={() => handleToggleMenu()}
				/>

				<img src={Logo} alt="youtube" className="w-36" />
			</div>
			<div className="middle-header-section">
				<div>
					<input
						type="text"
						placeholder="Search"
						className="px-4 w-[75%] border border-gray-200 p-2 rounded-l-full"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="border border-gray-200 p-2 rounded-r-full bg-gray-100">
						Search
					</button>
				</div>

				{showSuggestions && suggestions.length > 0 && (
					<div className="search-suggestions fixed bg-white border border-gray-100 w-[29.5rem] rounded-lg">
						<ul>
							{suggestions.map((suggestion) => (
								<li
									key={suggestion}
									className="px-5 py-1 my-2 hover:bg-gray-200 shadow-sm"
								>
									🔍️ {suggestion}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<div className="right-header-section"></div>
		</div>
	);
};

export default Head;
