// src/screens/addNote.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddNote = () => (
  <View style={styles.container}>
    <Text>Tambahkan Note</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddNote;
