// index.tsx
import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Home from '../src/screens/home';
import CustomButton from '../src/components/customButton';
import CustomTextInput from '../src/components/customTextInput';

export default function Index() {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const handleTextChange = (text: string) => {
    setInputText(text);
  };

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: inputText,
      desc: '',
    };

    setNoteList([...noteList, newNote]);
    setInputText('');
  };

  const handleButtonPress = () => {
    alert('Button pressed'); // Gantilah dengan logika aplikasi sesuai kebutuhan
  };

  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#39494F"
        text="Custom Button"
        width={Dimensions.get('window').width - 80} // Menggunakan lebar layar dengan margin
        onPress={handleButtonPress} // Menetapkan fungsi handleButtonPress sebagai onPress
      />
      <CustomTextInput
        label="Custom Text"
        multiline
        numberOfLines={2}
        onChange={handleTextChange}
        text={inputText}
      />
      <Home noteList={noteList} setNoteList={setNoteList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
});
