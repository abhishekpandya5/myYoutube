import React from "react";
import { convertCount, msToTime } from "../utils/helper";

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info || {};
	const { channelTitle, thumbnails, title, publishedAt } = snippet || {};

	const convertPublishedDate = (date) => {
		let publishedDate = Date.now() - new Date(date).getTime();
		publishedDate = msToTime(publishedDate);
		return publishedDate;
	};

	return (
		<div className="w-64 p-2 m-2">
			<img
				className="rounded-lg mb-2"
				src={thumbnails?.medium?.url}
				alt="thumbnail"
			/>
			<div className="text-base">{title}</div>
			<div className="text-sm text-gray-600">{channelTitle}</div>
			<div className="text-sm text-gray-600">
				{convertCount(statistics.viewCount)} views .{" "}
				{convertPublishedDate(publishedAt)} ago
			</div>
		</div>
	);
};

export const AdVideoCard = ({ info }) => {
	return (
		<div className="border border-red-400">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
