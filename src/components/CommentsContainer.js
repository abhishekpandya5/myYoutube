import React from "react";

const commentsData = [
	{
		name: "Abhishek",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		replies: []
	},
	{
		name: "John",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		replies: [
			{
				name: "Marry",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
				replies: [
					{
						name: "Rahul",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
						replies: [
							{
								name: "Pandya",
								text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
								replies: []
							}
						]
					}
				]
			}
		]
	},
	{
		name: "Tilu",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		replies: [
			{
				name: "Sehwag",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
				replies: []
			}
		]
	},
	{
		name: "random",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		replies: []
	}
];

const Comment = ({ data }) => {
	const { name, text } = data;
	return (
		<div className="flex my-2 shadow-sm bg-gray-100 p-2 rounded-lg">
			<img
				className="w-12"
				src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				alt="user"
			/>
			<div className="px-3">
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
	return comments.map((comment, idx) => (
		<div key={idx}>
			<Comment className="my-2" data={comment} />
			<div className="pl-5 ml-8 border border-l-black">
				<CommentList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = () => {
	return (
		<div className="m-5 p-2">
			<h1 className="font-bold text-2xl">Comments: </h1>
			<CommentList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
