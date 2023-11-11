import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from  'firebase/firestore'
import {db } from '../firebase'

export  const firestoreReducer = createSlice ({

    name:"db",
    initialState:[{
        Productname:"",
        amaunt:"",
        descriptions:"",
        Quantity:"",

    }],
    reducers:{
        Productname: async(state,action) => {
            const docRef = await addDoc(collection(db,'shoppinglist'),action.payload)
        }
    }

})
export const { Productname } = firestoreReducer.actions

export default firestoreReducer.reducer