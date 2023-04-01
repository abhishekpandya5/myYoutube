import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [searchParams] = useSearchParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, [dispatch]);
	return (
		<div className="flex flex-col">
			<div className="px-5 flex">
				<div className="video-player">
					<iframe
						width="890"
						height="515"
						src={
							"https://www.youtube.com/embed/" +
							searchParams.get("v") +
							"?start=0"
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="live-chat w-full">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};
export default WatchPage;
