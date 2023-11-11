import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import store from './firestoreRedux/store';
import { Provider } from "react-redux";
import Add from './components/Add';
import Display from './components/Display';
import EditButton from './components/EditButton';



export default function App() {


  
return (
  <Provider store={store}>
  <Display/>
  </Provider>
);
}
