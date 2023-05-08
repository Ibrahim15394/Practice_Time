import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState : {
    expenses: [],
  },
  reducers: {
    expensesReducer :(state = initialState, action)  =>{
      console.log({action})
        switch (action.type) {
          case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
          case "UPDATE":
            const updatableExpenseIndex = state.findIndex(
              (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updateItem;
            return updatedExpenses;
          case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
          default:
            return state;
        }
      }
    }
 
});



 export const addExpense = (add) => dispatch => {
    dispatch({ type: "ADD", payload: add });
  }
  export const deleteExpense =(id) => dispatch => {
    dispatch({ type: "DELETE", payload: id });
  }
  export const updateExpense =(expenseData, id) => dispatch =>{
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

export const {expensesReducer} = expenseSlice.actions;
export default expenseSlice.reducer;

// function expenseReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       const id = new Date().toString() + Math.random().toString();
//       return [{ ...action.payload, id: id }, ...state];
//     case "UPDATE":
//       const updatableExpenseIndex = state.findIndex(
//         (expense) => expense.id === action.payload.id
//       );
//       const updatableExpense = state[updatableExpenseIndex];
//       const updateItem = { ...updatableExpense, ...action.payload.data };
//       const updatedExpenses = [...state];
//       updatedExpenses[updatableExpenseIndex] = updateItem;
//       return updatedExpenses;
//     case "DELETE":
//       return state.filter((expense) => expense.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function ExpenseProvider({ children }) {
//   const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

//   function addExpense(expenseData) {
//     dispatch({ type: "ADD", payload: expenseData });
//   }
//   function deleteExpense(id) {
//     dispatch({ type: "DELETE", payload: id });
//   }
//   function updateExpense(expenseData, id) {
//     dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
//   }

//   const value = {
//     expenses: expenseState,
//     addExpense: addExpense,
//     updateExpense: updateExpense,
//     deleteExpense: deleteExpense
//   };
//   return <ExpenseProvider.Provider value = {value}>{children}</ExpenseProvider.Provider>;
// }
