import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");
	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const i = setInterval(() => {
			// API Polling
			console.log("API polling");
			dispatch(
				addMessage({
					name: generateRandomName(),
					text: generateRandomText(26)
				})
			);
		}, 1000);

		return () => clearInterval(i);
	}, []);

	const handleSendMessage = (e) => {
		e.preventDefault();
		dispatch(
			addMessage({
				name: "Abhishek Pandya",
				text: liveMessage
			})
		);
		setLiveMessage("");
	};

	return (
		<div className="w-full ml-2">
			<div className=" h-[515px] p-2 border border-gray-600 bg-slate-100 rounded-md overflow-y-auto flex flex-col-reverse">
				{chatMessages.map((c, i) => (
					<ChatMessage key={i} name={c.name} text={c.text} />
				))}
			</div>
			<form className="flex gap-3 mt-2 px-2">
				<input
					type="text"
					className="w-full p-2 border border-gray-500"
					value={liveMessage}
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button
					className="border border-gray-500 bg-green-200 rounded-md py-2 px-4"
					onClick={(e) => handleSendMessage(e)}
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default LiveChat;
