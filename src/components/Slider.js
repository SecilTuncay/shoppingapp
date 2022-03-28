import React, { useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { fetchSliders } from "../redux/actions/allActions";
import { useDispatch, useSelector } from "react-redux";

function Slider() {
	const sliderInfo = useSelector(state => state.sliders.sliders);
	const dispatch = useDispatch();

	/* 	async function fetchSliders() {
		try {
			const response = await axios.get("http://localhost:3000/sliders");
			if (response.data) {
				dispatch(setSliders(response.data));
			}
		} catch (e) {
			console.log("Bilgiler Yüklenemedi.");
		}
	} */

	useEffect(() => {
		fetchSliders();
	}, []);

	console.log(sliderInfo);

	const sliderRenderList = sliderInfo.data.map(slider => {
		const { productId, image } = slider;
		return (
			<Carousel.Item key={productId} interval={1500}>
				<Nav>
					<Nav.Link href={`/products/${productId}`}>
						<img className="d-block w-100" src={`http://localhost:3000/${image}`} alt="" />
					</Nav.Link>
				</Nav>
			</Carousel.Item>
		);
	});

	return (
		<section>
			<div className="container">
				<Carousel prevLabel="" nextLabel="" indicators={false}>
					{/* 	{sliderRenderList} */}
				</Carousel>
			</div>
		</section>
	);
}

export default Slider;
