import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const NoteCard = ({ item, onPressEdit, onPressDelete }) => (
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
        onPress={() => onPressEdit(item.id)}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => onPressDelete(item.id)}
      />
    </View>
  </View>
);

const Home = ({ noteList, setNoteList }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: newTitle,
      desc: newDesc,
    };

    setNoteList([...noteList, newNote]);
    setNewTitle('');
    setNewDesc('');
  };

  const handleEditNote = (id) => {
    // Implementasi fungsi ubah catatan
    // Misalnya, bisa menavigasi ke layar ubah catatan
    console.log(`Edit note with id: ${id}`);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Judul"
        onChange={(text) => setNewTitle(text)}
        text={newTitle}
      />
      <CustomTextInput
        label="Deskripsi"
        multiline
        numberOfLines={3}
        onChange={(text) => setNewDesc(text)}
        text={newDesc}
      />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={handleAddNote}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            onPressEdit={handleEditNote}
            onPressDelete={handleDeleteNote}
          />
        )}
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
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Home;
