const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return state + action.payload;
    case "SUB_VALUE":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducerCounter;
