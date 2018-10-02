import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from  'native-base'
import {
  InputLogIn,
  Input,
  InputTwo,
  InputThree,
  HeaderWithoutMenu,
  InputV2
} from './common';

class SignUp extends Component {

  render() {
    const {
      singleInputStyle,
      twoInputViewStyle,
      twoInputStyle,
    } = styles;

    return(
      <Container>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <HeaderWithoutMenu headerTitle="SignUp" />
          <Content style={{margin: 20}}>
            <View style={twoInputViewStyle}>
              <InputV2
                label='First Name' style={twoInputStyle}
              />
              <InputV2
                label="Last Name" style={twoInputStyle}
              />
            </View>
            <View>
              <InputV2 label='Email' style={singleInputStyle} />
              <InputV2 label='Phone Number' style={singleInputStyle} />
              <InputV2 label='Street Address' style={singleInputStyle} />
            </View>

          </Content>
        </View>
      </Container>

    )
  }
}

const styles = {
  twoInputViewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  singleInputStyle: {
    color: 'white',
		backgroundColor: '#ADCBE0',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		lineHeight: 23,
		flex: 1,
		width: '100%',
		alignSelf: 'stretch'
  },
  twoInputStyle: {
		color: 'white',
		backgroundColor: '#ADCBE0',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		lineHeight: 23,
		flex: 1,
		width: 150,
		alignSelf: 'stretch'
	},
  threeInputStyle



}

export default SignUp;
