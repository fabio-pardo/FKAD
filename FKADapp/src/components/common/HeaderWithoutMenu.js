import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import {
	View,
	// Text,
	Image,
	TouchableOpacity,
	StatusBar,
	Platform,
} from 'react-native';
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
import Menu from './Menu';
// import {Button} from './Button';


class HeaderWithoutMenu extends Component {
	state = { showMenu: false };
	render() {
		return (
      <Header style={styles.toolbar}>
        <Left/>
        <Body>
          <Title style={styles.toolbarTitle}>Sign Up</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => {
            Actions.pop();
          }}>
            <Text>Cancel</Text>
          </Button>
        </Right>
      </Header>
			// <View style={styles.statusBarMargin}>
			// 	<StatusBar
      //   barStyle = "dark-content"
      //   hidden = {false}
      //   translucent = {true}
			// 	backgroundColor = "#ADCBE0"
      //   networkActivityIndicatorVisible = {true}
      //   />
			// 	<View style={styles.toolbar}>
			// 		<Text style={styles.toolbarTitle}>
			// 			{this.props.headerTitle}
			// 		</Text>
      //     <Button title=" Go Back" onPress={() => {
      //       Actions.pop();
      //     }} />
			// 	</View>
			// </View>
		);
	}
}

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
