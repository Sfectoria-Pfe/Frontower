const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
      
        const existingProduct = state.find(
          (item) => item.id === action.payload.id
        );
        if (existingProduct) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
  

      default:
        return state;
    }
  };
  
  export default cartReducer;
  