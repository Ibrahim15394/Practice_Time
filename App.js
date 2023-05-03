import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ManageExpense from './screens/ManageExpense';
import Tabs from './navigation/tabs';
import { GlobalStyles } from './constants/styles';
import ExpenseContextProvider from './store/expense-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle : {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white'
        }} >
          <Stack.Screen name='tabs' component={Tabs}  options={{headerShown : false}}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense}  options={{
            presentation: 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
