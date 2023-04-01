import React from 'react';

const Button = ({ title }) => {
	return (
		<div>
			<button className="m-2 px-5 py-2 bg-gray-100 rounded-md cursor-pointer">
				{title}
			</button>
		</div>
	);
};

export default Button;
