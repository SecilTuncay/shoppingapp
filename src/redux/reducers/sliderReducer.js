import { ActionTypes } from "../constants/action-types";

const initialState = { sliders: [] };

export const sliderReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_SLIDERS:
			return { ...state, sliders: payload };
		/* case ActionTypes.FETCH_SLIDERS:
			return { ...state, sliders: payload }; */
		default:
			return state;
	}
};
