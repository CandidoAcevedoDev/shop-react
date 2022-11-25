import { createBrowserRouter, Route, Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { HomePage, ProductPage, ProductsPage } from "../pages";

const Layout = () => {
	return (
		<div className='app'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				path: "/",
				element: <HomePage />,
			},
			{
				path: "products/:id",
				element: <ProductsPage />,
			},
			{
				path: "product/:id",
				element: <ProductPage />,
			},
		],
	},
]);
