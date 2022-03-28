import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/allActions";
import { Nav } from "react-bootstrap";
import axios from "axios";

function Categories() {
	const categoriesInfo = useSelector(state => state.categories);
	const dispatch = useDispatch();
	async function fetchCategories() {
		try {
			const response = await axios.get("http://localhost:3000/categories");
			if (response.data) {
				dispatch(getCategories(response.data));
			}
		} catch (e) {
			console.log("Bilgiler Yüklenemedi.");
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	const categoryRenderList = categoriesInfo.categories.map(category => {
		const { id, name, description } = category;
		return (
			<Nav.Link key={id} href={`/categories/${id}/products`}>
				<button key={id} type="button" className="btn categories--btn m-2">
					{name}
				</button>
			</Nav.Link>
		);
	});

	return (
		<section className="mt-4">
			<div className="container d-flex flex-row justify-content-center ">
				<div className="categories--container d-flex flex-column justify-content-center mt-4">
					<h2 className="text-center mb-4">Kategoriler</h2>
					<div className="d-flex flex-row justify-content-center">{categoryRenderList}</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
