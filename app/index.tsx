import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../src/screens/home';
import AddNote from '../src/screens/addNote';
import EditNote from '../src/screens/editNote';

type CurrentPage = 'home' | 'add' | 'edit'; // Tipe data untuk currentPage

const CurrentPageWidget: React.FC<{
  currentPage: CurrentPage;
  noteList: { id: number; title: string; desc: string }[]; // Tipe data untuk noteList
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>; // Tipe data untuk setCurrentPage
}> = ({ currentPage, noteList, setCurrentPage }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case 'add':
      return <AddNote />;
    case 'edit':
      return <EditNote />;
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home'); // Inisialisasi currentPage dengan tipe CurrentPage

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  return (
    <View style={styles.container}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
