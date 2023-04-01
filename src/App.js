import { Provider } from "react-redux";
import store from "./utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />
			},
			{
				path: "/watch",
				element: <WatchPage />
			}
		]
	}
]);

function App() {
	return (
		<Provider store={store}>
			<div>
				<Head />
				{/* <Body /> */}
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;

/* 
Wherever my appRouter is defined, there will be body render. 
and wherever the outlet is defined there will be children render.
*/
