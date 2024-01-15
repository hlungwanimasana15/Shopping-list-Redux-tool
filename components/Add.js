import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../firestoreRedux/addSlice';

const Add = () => {
  const [name, setName] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [quantity, setQuantity] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addItem({
        name: name,
        descriptions: descriptions,
        quantity: quantity,
      })
    );
    setName('');
    setDescriptions('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
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
        onChangeText={(text) => setQuantity(text)}
      />
        <Button
      title="Add items "
      onPress={handleSubmit}
     
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop:10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:5
  },
});

export default Add;
