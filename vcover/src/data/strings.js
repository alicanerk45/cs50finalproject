/* eslint-disable prettier/prettier */
var curLang = 'en';

const strings = {
  name: {
    en: 'Name',
  },
  lastname: {
    en: 'Last Name',
  },
  email: {
    en: 'Email',
  },
  password: {
    en: 'Password',
  },
  forgotPassword: {
    en: 'Forgot Password',
  },
  login: {
    en: 'Log in',
  },
  incorrectCredExp: {
    en: 'Please check your email and password.',
  },
  confirmEmail: {
    en: 'Please confirm your email.',
  },
  incorrectCredTitle: {
    en: 'Incorrect username or password',
  },
  unknownErrorOccured: {
    en: 'An unknown error occured. Please try again later.',
  },
  checkNetwork: {
    en: 'Please check your internet connection.',
  },
  dontHaveAcc: {
    en: "Don't have an account?",
  },
  signup: {
    en: 'Sign up',
  },
  rememberPassword: {
    en: 'Remember your password?',
  },
  emailNotValid: {
    en: 'Please enter a valid email.',
  },
  emailNotFound: {
    en: 'Email not found.',
  },
  checkYourEmail: {
    en: 'Check Your Email',
  },
  emailExpReset: {
    en: 'We have sent an email to this address for resetting your password.',
  },
  emailExpConfirm: {
    en: 'We have sent an email to this address to confirm your email.',
  },
  emailVerificationSuccess: {
    en: 'Email verification success!',
  },
  emailVerificationFailed: {
    en: 'Email verification failed!',
  },
  alreadyHaveAcc: {
    en: 'Already have an account?',
  },
  passwordTooShort: {
    en: 'Password should be at least 8 characters long',
  },
  passwordNotValid: {
    en: 'Password should contain an uppercase letter, a lowercase letter and a number.',
  },
  userAlreadyRegistered: {
    en: 'User already registered.',
  },
  resetMyPassword: {
    en: 'Reset my password',
  },
  terms: {
    en: 'Terms',
  },
  and: {
    en: 'and',
  },
  privacyPolicy: {
    en: 'Privacy Policy',
  },
  acceptTerms: {
    en: 'Please accept terms.',
  },
  listOfUsers: {
    en: 'List of Users',
  },
  settings: {
    en: 'Settings',
  },
  profile: {
    en: 'Profile',
  },
  logout: {
    en: 'Log out',
  },
  edit: {
    en: 'Edit',
  },
  account: {
    en: 'Account',
  },
  support: {
    en: 'Support',
  },
  changePassword: {
    en: 'Change Password',
  },
  userMan: {
    en: 'User Manual & Quick Start Guide',
  },
  contactUs: {
    en: 'Contact Us',
  },
  language: {
    en: 'Language',
  },
  english: {
    en: 'English',
  },
  updateAccount: {
    en: 'Update Account',
  },
  updatePassword: {
    en: 'Update Password',
  },
  confirm: {
    en: 'Confirm',
  },
  letsUpdateAcc: {
    en: "Let's update your account",
  },
  letsUpdatePass: {
    en: "Let's update your password",
  },
  oldPasswordWrong: {
    en: 'Your password is wrong.',
  },
  oldPassword: {
    en: 'Existing Password',
  },
  newPassword: {
    en: 'New Password',
  },
  retypeNewPassword: {
    en: 'Retype New Password',
  },
  search: {
    en: 'Search',
  },
  createUser: {
    en: 'Create New User',
  },
  editUser: {
    en: 'Edit User',
  },
  toStartSim: {
    en: 'To start stimulation, please tap on the user.',
  },
  pleaseFill: {
    en: 'Please fill all fields.',
  },
  create: {
    en: 'Create',
  },
  age: {
    en: 'Age',
  },
  gender: {
    en: 'Gender',
  },
  height: {
    en: 'Height (cm)',
  },
  weight: {
    en: 'Weight (kg)',
  },
  deleteUser: {
    en: 'Delete User',
  },
  userDeleted: {
    en: 'User deleted',
  },
  addDescription: {
    en: 'Add description about the user',
  },
  pleaseTake: {
    en: 'Please take the survey before the stimulation!',
  },
  surveyExp: {
    en: 'By answering questions, you help us to provide you customized stimulation parameters.',
  },
  takeSurvey: {
    en: 'Take the Survey',
  },
  startStim: {
    en: 'Start Stimulation',
  },
  surveyThanks: {
    en: 'Thank you for taking the survey!',
  },
  bleConnection: {
    en: 'Bluetooth Connection',
  },
  searching: {
    en: 'Searching for your device',
  },
  back: {
    en: 'Back',
  },
  buyDevice: {
    en: 'Buy a Device',
  },
  checkBluetooth: {
    en: 'Please enable Bluetooth.',
  },
  congrats: {
    en: 'Congratulations!',
  },
  readyStart: {
    en: 'You are now ready to start your V-cover.',
  },
  start: {
    en: 'Start',
  },
  bleDc: {
    en: 'Bluetooth disconnected.',
  },
  startError: {
    en: 'An error occured. Please check bluetooth connection.',
  },
  deviceControl: {
    en: 'Device Control',
  },
  startBLE: {
    en: 'Start',
  },
  stopBLE: {
    en: 'Stop',
  },
  appVersion: {
    en: 'App Version: ',
  },
  about: {
    en: 'Version',
  },
  us: {
    en: 'uS',
  },
  passwordNoMatch: {
    en: 'Passwords do not match.',
  },
  verifyPassword: {
    en: 'Confirm Password',
  },
  continue: {
    en: 'Continue',
  },
  selectUserType: {
    en: 'Please select a user type.',
  },
  okay: {
    en: 'Okay',
  },
  passwordExp: {
    en: 'Use 8 or more characters with a mix of uppercase, lowercase letters & numbers',
  },
  update: {
    en: 'Update',
  },
  updateInfo: {
    en: 'Update Info',
  },
  passwordUppercaseError: {
    en: 'At least one UPPERCASE',
  },
  passwordLowercaseError: {
    en: 'At least one lowercase',
  },
  passwordNumberError: {
    en: 'At least one number',
  },
  passwordLenghtError: {
    en: 'At least 8 characters',
  }


};

export function setLanguage(lang) {
  curLang = lang;
}

export function getLanguage() {
  return curLang;
}

export function getString(text) {
  return strings[text][curLang];
}
