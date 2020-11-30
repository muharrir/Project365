import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {ILBackground, ILLogo} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={ILBackground} style={styles.page}>
      <ILLogo />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
