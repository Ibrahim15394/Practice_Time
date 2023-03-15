import { FlatList, Text } from "react-native";

function renderExpensesItem(itemData ) {
  console.log("hiii");
  return (<Text>{itemData.item.description}</Text>);
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
