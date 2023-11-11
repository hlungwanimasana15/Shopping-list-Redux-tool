import { configureStore } from '@reduxjs/toolkit';
import addSlice from './addSlice';
import  infoSlice  from './Getdata';
import firestoreSlice from './EditSlice'
import dataSlice from './Data'


 const store = configureStore({
    reducer:{
        addData:addSlice,
        data:dataSlice,
        deleteitems:addSlice,
        getItem:infoSlice,
        updatefirestoreDocument :firestoreSlice

    }

})
 
export default store;