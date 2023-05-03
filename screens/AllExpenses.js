import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data/DummyExpenses";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";

function AllExpenses(){

    const expensesContext = useContext(ExpenseContext);

    return(
        <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod= ' Total'/>
    );
}


export default AllExpenses;