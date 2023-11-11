import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../firestoreRedux/Data';
import Add from './Add';
import EditButton from './EditButton';
import { deleteItems } from '../firestoreRedux/addSlice';

function Display() {
    const [modalVisible, setModalVisible] =useState(false);
  const [selectItem, setSelectItems] = useState("");
  const dispatch = useDispatch();

  // handles edit
  const handleEdit = (id) => {
    const [item] = data.filter((item) => item.id === id);
    setSelectItems(item);
    setModalVisible(true);
  };

  // the delete
  const { loading, error, data } = useSelector((state) => state.data);
    console.log('Data from Redux store:', data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.descriptions}</Text>
      <Text>{item.quantity}</Text>
      <Button title="Edit" onPress={() => handleEdit(item.id)} />
      <Button title="Delete" onPress={() => dispatch(deleteItems(item.id))} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Shopping </Text>
      <Add />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {modalVisible && <EditButton  selectItem={selectItem} modalVisible={modalVisible}  setModalVisible={setModalVisible} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingTop:40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});

export default Display;
