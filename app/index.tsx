import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CustomButton from '../src/components/customButton';
import CustomTextInput from '../src/components/customTextInput';

export default function Index() {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (text: string) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#39494F"
        text="Custom Button"
        width={Dimensions.get('window').width - 80} // Menggunakan lebar layar dengan margin
        onPress={() => alert('Button pressed')}
      />
      <CustomTextInput
        label="Custom Text"
        multiline
        numberOfLines={2}
        onChange={handleTextChange}
        text={inputText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
});
