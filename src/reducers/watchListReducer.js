export const initialState = {
  watchList: [],
  total: 0,
};

const watchListReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_WATCH_LIST":
      console.log("ADD_TO_WATCH_LIST", payload);
      return {
        ...state,
        watchList: payload.watchList,
      };
    case "REMOVE_FROM_WATCH_LIST":
      console.log("REMOVE_FROM_WATCH_LIST", payload);
      return {
        ...state,
        watchList: payload.watchList,
      };

    default:
      return state;
  }
};

export default watchListReducer;
