import React from "react";

const ChatMessage = ({ name, text }) => {
	return (
		<div className="flex items-center text-sm shadow-sm py-2">
			<img
				className="w-6"
				src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				alt="user"
			></img>
			<span className="px-2 font-bold">{name}</span>
			<span>{text}</span>
		</div>
	);
};

export default ChatMessage;
