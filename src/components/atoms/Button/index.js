import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({onPress, label}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0074E4',
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    borderRadius: 8,
    padding: 12,
  },
  text: {textAlign: 'center', color: 'white'},
});
