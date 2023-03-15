import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { DUMMY_EXPENSES } from "../data/DummyExpenses";

function AllExpenses(){
    return(
        <ExpensesOutput expensesPeriod= ' Total'/>
    );
}


export default AllExpenses;