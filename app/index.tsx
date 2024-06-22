import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../src/screens/home';
import AddNote from '../src/screens/addNote';
import EditNote from '../src/screens/editNote';

type CurrentPage = 'home' | 'add' | 'edit';

const CurrentPageWidget: React.FC<{
  currentPage: CurrentPage;
  noteList: { id: number; title: string; desc: string }[];
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  addNote: (title: string, desc: string) => void;
}> = ({ currentPage, noteList, setCurrentPage, addNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} />;
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const addNote = (title: string, desc: string) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
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
