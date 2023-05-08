import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data/DummyExpenses";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { useSelector } from "react-redux";

function AllExpenses(){
    // const expensesContext = useContext(ExpenseContext);
    // const expenseReducer = useSelector((state) => state.expenseReducer.expenses)


    return(
        <ExpensesOutput   expensesPeriod= ' Total'/> //expenses={expensesContext.expenses}
    );
}


export default AllExpenses;