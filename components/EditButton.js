import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet ,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { updatefirestoreDocument } from '../firestoreRedux/EditSlice';

function EditButton({ modalVisible,setModalVisible, selectItem }) {
  const [name, setName] = useState(selectItem ? selectItem.name : '');
  const [descriptions, setDescriptions] = useState(selectItem ? selectItem.descriptions : '');
  const [quantity, setQuantity] = useState(selectItem ? selectItem.quantity : '');
  const dispatch = useDispatch();

  // handle update
  const handleUpdate = () => {
    const updateItem = {
      id: selectItem.id,
      data: {
        name: name,
        descriptions: descriptions,
        quantity: quantity,
      },
    };

    dispatch(updatefirestoreDocument(updateItem));
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" 
    transparent={false} visible={ modalVisible}
     onRequestClose={() => setModalVisible(false)}>
      <View style={styles.container}>
        <Text style={styles.title}>Save your changes</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={descriptions}
            onChangeText={(text) => setDescriptions(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            keyboardType="numeric"
            value={quantity}
            onChangeText={(text) => setQuantity(parseInt(text,10))}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <Button title="Save Changes" onPress={handleUpdate} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default EditButton;
