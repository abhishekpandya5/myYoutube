import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VIDEO_LIST_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(VIDEO_LIST_API);
		const json = await data.json();
		setVideos(json.items);
		// console.log(json.items);
	};

	if (!videos) return <h1>Loading...</h1>;

	return (
		<div className="flex flex-wrap">
			{videos.length && <AdVideoCard info={videos[0]} />}
			{videos.map((video) => (
				<Link to={"/watch?v=" + video.id} key={video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
