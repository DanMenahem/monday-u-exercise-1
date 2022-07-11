import actionsTypes from "../constants"

const initialState = {
  isLoading: false,
}

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.LOADING_START:
      return { ...state, isLoading: true };
    case actionsTypes.LOADING_END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default loadingReducer;
