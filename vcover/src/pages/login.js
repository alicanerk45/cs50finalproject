import React, { useState, useEffect } from 'react';
import { Text, StatusBar, Keyboard, View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content } from 'native-base';

import CommonButton from '../components/commonbutton.js';
import CommonTextInput from '../components/commontextinput.js';

import { CONFIG } from '../data/config';
import { COLORS } from '../style/colors';
import { DEFAULT_FONT } from '../style/fonts';
import { getString } from '../data/strings';

import AwesomeAlert from 'react-native-awesome-alerts';

import SplashScreen from 'react-native-splash-screen';

const Login = ({ navigation }) => {

  SplashScreen.hide();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Set to true to skip auth process
  const debugSkipLogin = false;

  const emailAsyncKey = 'email-key';
  const passAsyncKey = 'pass-key';

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAllertMessage] = useState('');

  const openAlert = (message) => {
    setShowAlert(true);
    setAllertMessage(message);
  }

  const hideAlert = () => {
    setShowAlert(false);
  }

  useEffect(() => {
    getCredentials();
  }, []);

  const getCredentials = async () => {
    let recoveredEmail = await AsyncStorage.getItem(emailAsyncKey);
    let recoveredPassword = await AsyncStorage.getItem(passAsyncKey);
    if (recoveredEmail && recoveredPassword) {
      setEmail(recoveredEmail);
      setPassword(recoveredPassword);
    }
  };

  const forgotHandler = () => {
    navigation.navigate('Forgot');
  };

  const loginHandler = () => {
    if (email === "test" && password === 'test') {
      navigation.navigate('Survey');
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor={COLORS.vagustimBlue} />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.inputAndButtonView}>
          <CommonTextInput
            text={email}
            onChangeText={(text) => setEmail(text)}
            placeholderText={getString('email')}
            inputWidth={'100%'}
          />
          <CommonTextInput
            text={password}
            onChangeText={(text) => setPassword(text)}
            secureEntry={true}
            forgotPassword={true}
            onPressForgot={forgotHandler}
            placeholderText={getString('password')}
            inputWidth={'100%'}
          />
          <CommonButton
            text={getString('login')}
            onPress={loginHandler}
            buttonColor={COLORS.buttonBlue}
            buttonWidth={'90%'}
            buttonMarginTop={54}
          />
          <View style={styles.signupView}>
            <Text style={styles.dontHaveText}>
              {getString('dontHaveAcc')}
              {'    '}
              <Text
                style={styles.signupText}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                {getString('signup')}
              </Text>
            </Text>

            {/* Alert Component */}
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              message={alertMessage}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={false}
              showConfirmButton={true}
              confirmText="Close"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                hideAlert();
              }}
              onConfirmPressed={() => {
                hideAlert();
              }}
              onDismiss={() => {
                hideAlert();
              }}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '60%',
    height: undefined,
    aspectRatio: 1000 / 243,
    marginTop: 24,
    marginBottom: 16,
  },
  inputAndButtonView: {
    flex: 1,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70%'
  },
  signupView: {
    flex: 1,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dontHaveText: {
    fontSize: 16,
    fontFamily: DEFAULT_FONT,
    color: COLORS.darkText,
  },
  signupText: {
    fontSize: 16,
    fontFamily: DEFAULT_FONT,
    color: COLORS.blueTextColor,
  },
});

export default Login;
