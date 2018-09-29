import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  InputLogin,
  InputTwo,
  InputThree,
  HeaderWithoutMenu
} from './common';

class SignUp extends Component {

  render() {
    return(
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <HeaderWithoutMenu headerTitle="SignUp" />
      </View>
    )
  }
}

export default SignUp;
