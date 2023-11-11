import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection ,deleteDoc,doc} from  'firebase/firestore'
import {db } from '../firebase'

export  const addSlice = createSlice ({

    name:"db",
    initialState:[{
        name:"",
        descriptions:"",
        Quantity:"",

    }],
    reducers:{
        addItem: (state,action) => {

         try {  
            const docRef = addDoc(collection(db,'shoppinglist'),action.payload)
        }catch (err){
            console.log(err)
        }
    },
        deleteItem: (state,action) => {

            const index=state.data.findIndex((item) => item.id ===action.payload);
            if(index !== -1){
                state.data.splice(index,1)
                window.location.reload()
            }
        
    }
         
    }

})
export const { addItem } = addSlice.actions

export const deleteItems =  (id) => async (dispatch) =>{

    try {  
        await deleteDoc(doc(db,'shoppinglist' ,id))
        dispatch(deleteItems(id))
        // alert("Deleted successfully")

    }catch (err){
        console.log(err)
    }
}

export default addSlice.reducer