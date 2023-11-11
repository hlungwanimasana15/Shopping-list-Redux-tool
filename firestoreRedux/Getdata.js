import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection ,getDoc} from  'firebase/firestore'
import {db } from '../firebase'


export  const infoSlice = createSlice ({

    name:"db",
    initialState:[{
        name:"",
        descriptions:"",
        Quantity:"",

    }],
    reducers:{
        getItem: (state,action) => {

         try {  
            const docRef = getDoc(collection(db,'shoppinglist'),action.payload)
        }catch (err){
            console.log(err)
        }
    },
}
    

})
export const { getItem } = infoSlice.actions

export default infoSlice.reducer