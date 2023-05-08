import { configureStore} from "@reduxjs/toolkit";
import expenseSlice from './expense-redux';

export const store = configureStore({
    reducer:{
    expense: expenseSlice,
    }
});