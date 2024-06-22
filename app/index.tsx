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
  deleteNote: (id: number) => void;
  updateNote: (id: number, title: string, desc: string) => void;
  currentNote: { id: number; title: string; desc: string } | null;
  setCurrentNote: React.Dispatch<React.SetStateAction<{ id: number; title: string; desc: string } | null>>;
}> = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  updateNote,
  currentNote,
  setCurrentNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setCurrentNote={setCurrentNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return currentNote ? (
        <EditNote note={currentNote} setCurrentPage={setCurrentPage} updateNote={updateNote} />
      ) : (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setCurrentNote={setCurrentNote}
        />
      );
    default:
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setCurrentNote={setCurrentNote}
        />
      );
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
  const [currentNote, setCurrentNote] = useState<{ id: number; title: string; desc: string } | null>(null);

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

  const deleteNote = (id: number) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  const updateNote = (id: number, title: string, desc: string) => {
    setNoteList(
      noteList.map(note =>
        note.id === id ? { ...note, title, desc } : note
      )
    );
  };

  return (
    <View style={styles.container}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        deleteNote={deleteNote}
        updateNote={updateNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
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
