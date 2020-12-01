import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILBackgroundOnboard, ILLogo} from '../../assets';
import {Button, Link} from '../../components';
import ButtonBack from '../../components/atoms/ButtonIcon/ButtonBack';
import Input from '../../components/atoms/Input';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBackgroundOnboard} style={styles.bg}>
        <TouchableOpacity style={styles.icon}>
          <ButtonBack onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <ILLogo />
      </ImageBackground>
      <View style={styles.wrapperText}>
        <Text style={styles.label}>Login</Text>
        <Text style={styles.desc}>Welcome back, login to continue!</Text>
        <Input text="Username" />
        <Input text="Password" />
        <View style={styles.wrapperCheck}>
          <CheckBox lineWidth={1.0} />
          <View style={styles.wrapperLink}>
            <Text style={styles.text}>Remember Me</Text>
            <Link label="Forgot password?" />
          </View>
        </View>
        <Button
          label="Login to my Account"
          onPress={() => navigation.replace('Homepage')}
        />
        <View style={styles.linkacc}>
          <Link label="Signup for New Account" />
        </View>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: windowHeight * 0.04,
  },
  bg: {
    width: '100%',
    height: windowHeight * 0.34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  icon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: windowHeight * 0.037,
    left: windowHeight * 0.037,
    width: 25,
    height: 25,
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
    marginBottom: 52,
  },
  wrapperCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#71828a',
    marginLeft: 10,
  },
  wrapperLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  linkacc: {marginTop: 30},
});
