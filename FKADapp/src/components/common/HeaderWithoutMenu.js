import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Button,
  Text,
  Title
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Confirm from './Confirm';


const HeaderWithoutMenu = ({ rightButtonTitle }) => {
		return (
      <Header style={styles.toolbar}>
        <Left />
        <Body>
          <Title style={styles.toolbarTitle}>Sign Up</Title>
        </Body>
        <Right />
      </Header>
		);
};

const styles = {
	toolbar: {
		backgroundColor: 'white', //Step 1
	},
	toolbarTitle: {
		width: '100%',
		color: '#3982B6',
		fontSize: 32,
		fontFamily: 'AppleGothic',
		paddingTop: 3, //Step 3
	},
	statusBarMargin: {
		marginTop: (Platform.OS == 'ios') ? 20 : 0
	}
};

export { HeaderWithoutMenu };
