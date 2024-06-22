// src/screens/editNote.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditNote = () => (
  <View style={styles.container}>
    <Text>Ubah Note</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditNote;
