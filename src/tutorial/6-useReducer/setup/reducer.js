const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      showModal: true,
      modalContext: "Hello There",
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      showModal: true,
      modalContext: "Pls add value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
      modalContext: "",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const filteredItems = state.people.filter(
      (eachItem) => eachItem.id !== action.payload
    );
    return {
      ...state,
      people: filteredItems,
      showModal: true,
      modalContext: "Item removed",
    };
  }
};

export default reducer;
