import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Link({onPress, label}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 30, alignItems: 'center'},
  text: {fontSize: 12, fontFamily: 'Poppins-Medium', color: '#1D262C'},
});
