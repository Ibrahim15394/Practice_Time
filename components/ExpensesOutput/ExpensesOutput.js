import { View , StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_EXPENSES } from "../../data/DummyExpenses";
import ExpensesSummary from "./ExdpensesSummary";
import ExpensesList from "./ExpensesList";



function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style = {styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700,
      
    },
    period: {
        fontSize: 14,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        },
});