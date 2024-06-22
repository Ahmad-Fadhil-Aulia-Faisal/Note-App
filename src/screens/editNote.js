import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';

const EditNote = ({ setCurrentPage }) => (
  <View style={styles.container}>
    <Text>Ubah Note</Text>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Kembali"
      width="100%"
      onPress={() => setCurrentPage('home')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default EditNote;
