const initalState = {
  data: [],
  product: {},
  relatedProduct: [],
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "GetData":
      return { ...state, data: [...action.payload.data] };
    case "GetDataById":
      return {
        data: [],
        product: action?.payload?.data?.product,
        relatedProduct: action?.payload?.data?.relatedProducts,
      };
    case "AboutBack":
      return {
        data: [],
        product: [],
        relatedProduct: [],
      };
    default:
      return state;
  }
};

export default Reducer;
