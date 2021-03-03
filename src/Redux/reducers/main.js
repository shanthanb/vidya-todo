import { SET_MAPPED_DATA } from "../actions/actionTypes";

const INITIAL_STATE = {
	mappedList: null,
};

const mainReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_MAPPED_DATA:
			return {
				...state,
				mappedList: action.mappedList,
			};
		default:
			return state;
	}
};

export default mainReducer;
