const initialState = { cocktailData: [], cart: [] };
const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, cocktailData: action.payload };
    case "REMOVE_DATA":
      return {
        ...state,
        cocktailData: [
          ...state.cocktailData.filter(
            (item) => item.idDrink !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default cocktailReducer;
