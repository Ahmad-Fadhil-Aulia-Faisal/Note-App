import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';

const Home = ({ noteList, setCurrentPage }) => {
  const NoteCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={() => setCurrentPage('edit')}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={() => {}}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => setCurrentPage('add')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => <NoteCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Home;
