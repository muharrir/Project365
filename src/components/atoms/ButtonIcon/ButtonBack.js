import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBack} from '../../../assets';

export default function ButtonBack({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ICBack />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
