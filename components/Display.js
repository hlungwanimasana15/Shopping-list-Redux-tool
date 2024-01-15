import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../firestoreRedux/Data';
import Add from './Add';
import EditButton from './EditButton';
import { deleteItems } from '../firestoreRedux/addSlice';
import { AntDesign } from '@expo/vector-icons';


function Display() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  const dispatch = useDispatch();

  // handles edit
  const handleEdit = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setSelectItem(selectedItem);
    setModalVisible(true);
  };

  // the delete
  const { loading, error, data } = useSelector((state) => state.data);
  console.log('Data from Redux store:', data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardText}>{item.descriptions}</Text>
      <Text style={styles.cardText}>{item.quantity}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => dispatch(deleteItems(item.id))}>
        <AntDesign name="delete" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleEdit(item.id)} >
        <AntDesign name="edit" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Happy Shopping</Text>
      <Add />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
      />
      {modalVisible && (
        <EditButton
          selectItem={selectItem}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingTop: 80,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
  },
  button: {
    marginLeft: 10, 
    marginBottom:70
  },
});

export default Display;
