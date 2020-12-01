import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function Input({text}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={text} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3DFEF',
    marginBottom: 40,
  },
  input: {paddingVertical: 12},
});
