import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../redux/actions/allActions";
import ProductCard from "./ProductCard";

function CategoryListing() {
	const { categoryId } = useParams();
	const categoryProducts = useSelector(state => state.categories.categoryProducts);
	console.log("categoryProducts: ", categoryProducts);
	const dispatch = useDispatch();

	const categoryNames = ["Elektronik", "Moda", "Kitap"];

	const fetchCategoryProducts = async () => {
		const response = await axios.get(`http://localhost:3000/categories/${categoryId}/products`).catch(err => err);
		dispatch(getCategoryProducts(response.data));
	};

	useEffect(() => {
		fetchCategoryProducts();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-4">{categoryNames[categoryId - 1]}</h1>
			<hr />
			<div className="row flex-row p-2 m-auto">
				{categoryProducts.map((product, id) => {
					return <ProductCard key={id} data={product} />;
				})}
			</div>
		</div>
	);
}

export default CategoryListing;
