import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData ) {
  console.log("hiii");
  return <ExpensesItem {...itemData.item}/> ;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpensesItem}
    />
  );
}

export default ExpensesList;
