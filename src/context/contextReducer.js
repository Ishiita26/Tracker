const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      {
        /*we'are filtering the state that accepts a callback function that will delete if the t.id!=payload*/
      }
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      {
        /*payload wo transaction hai jo new hai action add krega ans ...state spread operator hai array me store krega purane transactions ke sth*/
      }
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions;
      
    default:
      return state;
  }
};

export default contextReducer;
