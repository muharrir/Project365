import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICFacebook, ICGoogle} from '../../../assets';

export default function ButtonIcon({onPress, icon}) {
  const Icon = () => {
    if (icon === 'facebook') {
      return <ICFacebook />;
    }
    if (icon === 'google') {
      return <ICGoogle />;
    }
    return <ICFacebook />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E7ECEE',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 13,
    width: 145,
    alignItems: 'center',
  },
});
