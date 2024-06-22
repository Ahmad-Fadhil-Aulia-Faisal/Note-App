import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({ text, onChange, label, placeholder, multiline, numberOfLines }) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChange}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#203239',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top', // Ensures the text aligns at the top for multiline inputs
  },
});

export default CustomTextInput;
