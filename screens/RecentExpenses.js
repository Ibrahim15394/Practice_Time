import { View, Text } from "react-native";



import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { useSelector } from "react-redux";
 import { expenseReducer } from "../store/redux/expense-redux";

// import { useContext } from "react";
// import { ExpenseContext } from "../store/expense-context";


function RecentExpenses(){
//  const expensesContext = useContext(ExpenseContext);
const expensesRedux = useSelector((state) => state.expenseSlice.expenses);


 if(expensesRedux === null){
  return ( console.log( "FFFFF"));
 }

 const recentExpenses =  expensesRedux.expenses.filter((expenses) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expenses.date > date7DaysAgo;
 });
    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod= 'Last 7 Days'/>   //expenses={recentExpenses}
    );
}


export default RecentExpenses;