import { View , Text} from "react-native";
import { DummyData } from "../../data/DummyExpenses";
import ExpensesSummary from "./ExdpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View>
        <ExpensesSummary expenses={DummyData} periodName={expensesPeriod}/>
        <ExpensesList/>
        </View>
    );
}

export default ExpensesOutput;