import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/allActions";
import { Card, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "./Categories";
import Slider from "./Slider";
library.add(fas, far);

function ProductMainPage() {
  const productInfo = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  const { productId } = useParams();
  console.log("productId: ", productId);
  const categoryNames = ["Elektronik", "Moda", "Kitap"];

  async function fetchProducts() {
    try {
      const response = await axios.get(`http://localhost:3000/products/${productId}`);
      if (response.data) {
        console.log(response.data);
        dispatch(getProduct(response.data));
      }
    } catch (e) {
      console.log("Bilgiler Yüklenemedi.");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const onFavoriteClick = (e) => {
    console.log(e.target);
  };

  const { category, name, description, id, isFavorite, price, productImage } = productInfo;
  return (
    <div className="container mr-auto mt-4">
      <Card className="product-main flex-row">
        <div className="image_cont d-flex align-items-center">
          <Card.Img src={`http://localhost:3000/${productImage}`} />
        </div>
        <Card.Body className="body">
          <Card.Title className="name_cont">{name}</Card.Title>
          <p className="mb-2">{categoryNames[category - 1]}</p>
          <Card.Text className=" description mb-2">{description}</Card.Text>
          <Card.Text className="mb-2">
            <span className="price ">{price}</span> TL
          </Card.Text>
          <Card.Text>
            {isFavorite ? <FontAwesomeIcon icon="fa-solid fa-heart" /> : <FontAwesomeIcon icon="fa-regular fa-heart" />} {""} Favorilere Ekle
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductMainPage;
