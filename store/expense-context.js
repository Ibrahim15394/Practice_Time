// import { useContext, useReducer } from "react";
// import { DUMMY_EXPENSES } from "../data/DummyExpenses";

// export const ExpenseContext = useContext({
//   expenses: [],
//   addExpense: ({ description, amount, date }) => {},
//   deleteExpense: (id) => {},
//   updateExpense: (id, { description, amount, date }) => {},
// });

// function expenseReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       const id = new Date().toString() + Math.random().toString();
//       return ([{ ...action.payload, id: id }, ...state]);
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
//       return (state.filter((expense) => expense.id !== action.payload));
//     default:
//       return state;
//   }
// }

// function ExpenseContextProvider({ children }) {
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
//   return <ExpenseContext.Provider value = {value}>{children}</ExpenseContext.Provider>;
// }

// export default ExpenseContextProvider;
