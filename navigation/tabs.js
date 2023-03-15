import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/styles";
import AllExpenses from "../screens/AllExpenses";
import RecentExpenses from "../screens/RecentExpenses";




const Tab = createBottomTabNavigator();


function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 , height: '8%' },
            tabBarActiveTintColor: GlobalStyles.colors.primary200,
            tabBarLabelStyle:{padding: 5},


        }}>
            <Tab.Screen name="Recent" component={RecentExpenses} options={{
                title: 'Recent Expenses',
                tabBarLabel: 'Recent',
            
                tabBarIcon: ({ size, color }) => <Ionicons name="hourglass" color={color} size={size} />
            }} />
            <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
                title: 'All Expenses',
                tabBarLabel: 'All Expenses',
                tabBarIcon: ({ size, color }) => <Ionicons name="calendar" color={color} size={size}  />
                
            }} />


        </Tab.Navigator>
    );
}

export default Tabs;