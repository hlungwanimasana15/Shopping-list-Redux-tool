import { createSlice } from "@reduxjs/toolkit";
import { collection ,addDoc, getDocs, onSnapshot  } from 'firebase/firestore'
import { db } from "../firebase";

const initialState = {
    loading:false,
    error:null,
    data:[],

}

const dataSlice =createSlice({
    name:'data',
    initialState,
    reducers:{
        fetchDataStart(state){
            state.loading = true;
            state.error = null
        },

        fetchDataSuccess(state,action){
            state.loading = false;
            state.data=action.payload;

        },

        fetchDataFailure(state,action){
            state.loading = false ;
            state.error=action.payload
        }


}
})

export const {  fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export const fetchData = () => async ( dispatch ) => {
    dispatch(fetchDataStart())

    try{
    const collectionRef = collection(db, "shoppinglist");
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
}


export default dataSlice.reducer