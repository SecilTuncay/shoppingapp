import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { sliderReducer } from "./sliderReducer";

const reducers = combineReducers({
  sliders: sliderReducer,
  categories: categoryReducer,
  categoryProducts: categoryReducer,
  product: productReducer,
  products: productReducer,
  favorites: productReducer,
});

export default reducers;
