import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {updateDoc,doc} from  'firebase/firestore'
import {db } from '../firebase'

//async thunk action to update a document in firestore
export  const updatefirestoreDocument = createAsyncThunk(
    'firestore/updateDocument',
    async(document) => {
        const docRef = doc(db,'shoppinglist',document.id);
        await updateDoc(docRef,document.data)
        return document;

    },
   
)
//create slice   
    const firestoreSlice = createSlice({
        name:'firestore',
        initialState:{
        loading: false,
        error:null
        },

        reducers:{},

        extraReducers:(builder) =>{
            builder
            .addCase(updatefirestoreDocument.pending,(state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatefirestoreDocument.fulfilled,(state) =>{
                state.loading=false;
            })
            .addCase(updatefirestoreDocument.rejected,(state,action) =>{
                state.loading = false;
                state.error =action.error.message;
            });


        }

    })

    export default firestoreSlice.reducer
       
        
