import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses(){

 const expensesContext = useContext(ExpenseContext);

 const recentExpenses =  expensesContext.expenses.filter((expenses) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expenses.date > date7DaysAgo;
 });
    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod= 'Last 7 Days'/>
    );
}


export default RecentExpenses;