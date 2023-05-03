import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({id, description, date, amount}){
    const navigation = useNavigation();

    function onClick(){
     navigation.navigate('ManageExpense', {
        expenseId: id
     });
    }
    return(
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onClick} >
            <View style={styles.expenseItem}> 
                <View>
                <Text style={[styles.description, styles.textBase]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>

        </Pressable>
    );
}


export default ExpensesItem;


const styles = StyleSheet.create({
    pressed:{opacity:0.75},
    expenseItem: {
        padding: 12, 
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary100primary700,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.error50,
        shadowRadius: 4,
        shadowOffset:{width: 1, height: 1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary400
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: '600'
    },
    amountContainer:{
        paddingHorizontal: 12,
        paddingVertical: 4,backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
});