import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ILWelcome} from '../../assets';
import {Button} from '../../components';

export default function Welcome({navigation}) {
  return (
    <>
      <View style={styles.imageWrapper}>
        <Image source={ILWelcome} style={styles.image} />
      </View>
      <View style={styles.page}>
        <View style={styles.wrapperText}>
          <Text style={styles.label}>Cheers to Discounts!</Text>
          <Text style={styles.desc}>
            Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
            Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
          </Text>
        </View>
        <Button label="Next" onPress={() => navigation.replace('Onboarding')} />
      </View>
    </>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: 'white',
    paddingVertical: windowHeight * 0.075,
  },
  image: {
    width: '100%',
    height: windowHeight * 0.485,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1d262c',
    textAlign: 'center',
    marginBottom: 18,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#71828A',
    textAlign: 'center',
  },
  wrapperText: {
    alignItems: 'center',
    paddingHorizontal: 48,
    marginBottom: 81,
  },
});
