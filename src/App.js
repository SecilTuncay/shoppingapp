import "./style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductMainPage from "./components/ProductMainPage";
import ProductListing from "./components/ProductListing";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React from "react";
import CategoryListing from "./components/CategoryListing";
import FavoritesListing from "./components/FavoritesListing";
import HomeContent from "./components/HomeContent";

function App() {
	return (
		<div className="App d-flex flex-column min-vh-100">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomeContent />} />
					<Route path="/products" element={<ProductListing />} />
					<Route path="/products/:productId" exact element={<ProductMainPage />} />
					<Route path="/categories/:categoryId/products" exact element={<CategoryListing />} />
					<Route path="/favorites" exact element={<FavoritesListing />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
