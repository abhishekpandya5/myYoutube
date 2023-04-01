import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(openMenu());
	}, [dispatch]);

	return (
		<div className="col-span-10  m-2">
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
