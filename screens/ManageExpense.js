import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch} from "react-redux";


import IconButton from "../Ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../Ui/Button";
import expenseRedux, { expenseReducer } from "../store/redux/expense-redux";
import { DUMMY_EXPENSES } from "../data/DummyExpenses";

function ManageExpense({ route, navigation }) {
  const expense = useSelector((state)=> state.expense.expenses)
  const dispatch = useDispatch()
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpense() {
    console.log('delete',route?.params?.expenseId)
  dispatch(expenseReducer(DUMMY_EXPENSES,{type: 'DELETE',payload:route?.params?.expenseId}));
    navigation.goBack();

  }

  function cancel() {
    navigation.goBack();
  }

  function confirm() {
    if (isEditing ){
      return dispatch(updateExpense());
    }else{
    return (dispatch(addExpense()));
  }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirm}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.primary200}
            size={24}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
