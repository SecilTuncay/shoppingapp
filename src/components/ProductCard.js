import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

function ProductCard(props) {
	const categoryNames = ["Elektronik", "Moda", "Kitap"];
	const categoryName = categoryNames[props.data.category - 1];
	return (
		<Card className="card-cont mr-3 mb-3" key={props.data.id}>
			<Link to={`/products/${props.data.id}`}>
				<Card.Img className="card-image" variant="top" src={`http://localhost:3000/${props.data.productImage}`} />
			</Link>
			<Card.Body>
				<Card.Title className="title mb-2">{props.data.name}</Card.Title>
				<Card.Text className="category-name mb-2">{categoryName}</Card.Text>
				<Card.Text className="description">{props.data.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<p className="favorites pl-2 mt-2">
					{props.data.isFavorite ? <FontAwesomeIcon icon="fa-solid fa-heart" /> : <FontAwesomeIcon icon="fa-regular fa-heart" />} {""} Favorilere Ekle
				</p>
			</Card.Footer>
		</Card>
	);
}

export default ProductCard;
