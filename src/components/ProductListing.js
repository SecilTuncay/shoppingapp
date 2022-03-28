import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function ProductListing() {
	async function fetchProducts() {
		try {
			const response = await axios.get("http://localhost:3000/products");
			if (response.data) {
				console.log("helo" + response.data);
				//	dispatch(getProducts(response.data));
			}
		} catch (e) {
			console.log("Bilgiler Yüklenemedi.");
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<>
			<h1>ProductsListing Title : </h1>
		</>
	);
}

export default ProductListing;
