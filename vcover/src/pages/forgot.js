import React, { useState } from 'react';
import { Text, StatusBar, Keyboard, View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import CommonButton from '../components/commonbutton.js';
import CommonTextInput from '../components/commontextinput.js';
import { COLORS } from '../style/colors';
import { DEFAULT_FONT } from '../style/fonts';
import { getString } from '../data/strings';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as Progress from 'react-native-progress';

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [requestActive, setRequestActive] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAllertMessage] = useState('');

  const openAlert = (message) => {
    setShowAlert(true);
    setAllertMessage(message);
  }

  const hideAlert = () => {
    setShowAlert(false);
  }

  const validateEmail = (emailText) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(emailText);
  };

  const resetHandler = () => {
    Keyboard.dismiss();
    if (requestActive) {
      return;
    }

    if (validateEmail(email)) {
      sendResetRequest();
    } else {
      setEmail('');
      openAlert(getString('emailNotValid'));
    }
  };

  const sendResetRequest = () => {
    setRequestActive(true);
    navigation.navigate('CheckEmail', { isReset: true });
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
          {requestActive ?
            <Progress.Circle size={50} indeterminate={true} style={styles.progressStyle} />
            :
            <CommonButton
              text={getString('resetMyPassword')}
              onPress={resetHandler}
              buttonColor={COLORS.buttonGreen}
              buttonWidth={'90%'}
              buttonMarginTop={54}
            />}

          <View style={styles.rememberView}>
            <Text style={styles.rememberText}>
              {getString('rememberPassword')}
              {'    '}
              <Text
                style={styles.loginText}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                {getString('login')}
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
    height: '100%',
  },
  inputAndButtonView: {
    flex: 1,
    width: '85%',
    marginTop: '60%'
  },
  rememberView: {
    flex: 1,
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  rememberText: {
    fontSize: 16,
    fontFamily: DEFAULT_FONT,
    color: COLORS.darkText,
  },
  loginText: {
    fontSize: 16,
    fontFamily: DEFAULT_FONT,
    color: COLORS.blueTextColor,
  },
  progressStyle: {
    marginTop: 44,
    color: COLORS.buttonGreen
  }
});

export default Forgot;
