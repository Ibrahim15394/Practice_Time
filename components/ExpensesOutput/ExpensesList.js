import { FlatList } from "react-native";
import { View , Text} from "react-native";

function ExpensesList({expenses}){
    return( 
     <FlatList data={expenses} keyExtractor = {(item) => item.id }/>
    );
}

export default ExpensesList;