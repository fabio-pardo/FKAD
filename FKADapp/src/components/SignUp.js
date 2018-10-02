import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from  'native-base'
import {
  InputLogIn,
  Input,
  InputTwo,
  InputThree,
  HeaderWithoutMenu,
<<<<<<< HEAD
  InputV2,
  Button
=======
  InputV2
>>>>>>> master
} from './common';

class SignUp extends Component {

  render() {
    const {
      singleInputStyle,
      twoInputStyle,
      threeInputStyle,
      rowInputViewStyle,
    } = styles;

    return(
      <Container>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <HeaderWithoutMenu headerTitle="SignUp" />
<<<<<<< HEAD
          <Content style={{margin: 20, marginTop: 0}}>
=======
          <Content style={{margin: 20}}>
>>>>>>> master
            <View style={rowInputViewStyle}>
              <InputV2
                label='First Name' style={twoInputStyle}
              />
              <InputV2
                label="Last Name" style={twoInputStyle}
              />
            </View>
            <View>
              <InputV2 label='G-Mail' style={singleInputStyle} />
              <InputV2 label='Phone Number' style={singleInputStyle} />
              <InputV2 label='Street Address' style={singleInputStyle} />
            </View>
            <View style={rowInputViewStyle}>
              <InputV2 label='City' style={threeInputStyle} />
              <InputV2 label='State' style={threeInputStyle} />
              <InputV2 label='Zip' style={threeInputStyle} />
            </View>
            <View>
              <InputV2 label='Enter Password' style={singleInputStyle} />
              <InputV2 label='Confirm Password' style={singleInputStyle} />
            </View>
<<<<<<< HEAD
            <Button>Confirm</Button>
=======
>>>>>>> master
          </Content>
        </View>
      </Container>

    )
  }
}

const styles = {
  rowInputViewStyle:{
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
		width: 160,
		alignSelf: 'stretch'
	},
  threeInputStyle: {
    color: 'white',
		backgroundColor: '#ADCBE0',
		fontFamily: 'AppleGothic',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		lineHeight: 23,
		flex: 1,
		width: 100,
		alignSelf: 'stretch'
  }
}

export default SignUp;
