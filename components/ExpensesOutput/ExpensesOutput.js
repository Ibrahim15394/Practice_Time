import { View , StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { DUMMY_EXPENSES } from "../../data/DummyExpenses";
import ExpensesSummary from "./ExdpensesSummary";
import ExpensesList from "./ExpensesList";



function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style = {styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses} />
        </View>
    );
}

export default ExpensesOutput;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:12,
        paddingVertical:12,
        paddingTop:12,
       paddingBottom: 0,
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