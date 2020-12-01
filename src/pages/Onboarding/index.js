import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ILBackgroundOnboard, ILLogo} from '../../assets';
import {Button, ButtonIcon, Link} from '../../components';

export default function Onboarding({navigation}) {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBackgroundOnboard} style={styles.bg}>
        <ILLogo />
      </ImageBackground>
      <View style={styles.wrapperText}>
        <Text style={styles.label}>Welcome Aboard!</Text>
        <Text style={styles.desc}>
          Signup to get started with the app. Login if you already have an
          account.
        </Text>
        <View style={styles.icon}>
          <ButtonIcon icon="facebook" style={styles.iconfb} />
          <ButtonIcon icon="google" />
        </View>
        <Button label="Signup with E-mail" />
        <View style={styles.link}>
          <Link
            label="Login to my Account"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white', paddingTop: windowHeight * 0.094},
  bg: {
    width: '100%',
    height: windowHeight * 0.34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  wrapperText: {paddingHorizontal: 48},
  label: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1d262c',
    marginBottom: 18,
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#71828A',
    textAlign: 'center',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 72,
    marginBottom: 30,
  },
  link: {marginTop: 30},
});
