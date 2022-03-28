import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../redux/actions/allActions";
import ProductCard from "./ProductCard";

function FavoritesListing() {
	const favorites = useSelector(state => state.products.favorites);
	const dispatch = useDispatch();

	async function fetchFavorites() {
		try {
			const response = await axios.get("http://localhost:3000/favorites");
			if (response.data) {
				dispatch(getFavorites(response.data));
			}
		} catch (e) {
			console.log("Bilgiler Yüklenemedi.");
		}
	}

	useEffect(() => {
		fetchFavorites();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-4">Favoriler</h1>
			<hr />
			<div className="row flex-row p-2 m-auto">
				{favorites.map((favorite, id) => {
					return <ProductCard key={id} data={favorite} />;
				})}
			</div>
		</div>
	);
}

export default FavoritesListing;
