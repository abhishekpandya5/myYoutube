import { Outlet } from "react-router-dom";
// import MainContainer from './MainContainer';
import Sidebar from "./Sidebar";

const Body = () => {
	return (
		<div className="grid grid-flow-col my-2 p-2">
			<Sidebar />
			{/* <MainContainer /> */}
			<Outlet />
		</div>
	);
};

export default Body;
