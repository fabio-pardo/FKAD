import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StatusBar,
	Platform
 } from 'react-native';
import Menu from './Menu';

class Header extends Component {
	state = { showMenu: false };
	render() {
		return (
			<View style={styles.statusBarMargin}>
				<StatusBar
        barStyle = "dark-content"
        hidden = {false}
        translucent = {true}
				backgroundColor = "#ADCBE0"
        networkActivityIndicatorVisible = {true}
        />
				<View style={styles.toolbar}>
					<TouchableOpacity
						onPress={() => {
							console.log(this.state.showMenu);
							this.setState({ showMenu: !this.state.showMenu });
						}}
					>
						<Image
							style={{ height: 55 }}
							source={require('../../images/menuIcon.png')}
						/>
					</TouchableOpacity>
					<Text style={styles.toolbarTitle}>
						{this.props.headerTitle}
					</Text>
					<Menu
						visible={this.state.showMenu}
						onPress={() => {
							this.setState({ showMenu: !this.state.showMenu });
						}}
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	toolbar: {
		backgroundColor: 'white',
		flexDirection: 'row' //Step 1
	},
	toolbarTitle: {
		width: '80%',
		color: '#3982B6',
		fontSize: 35,
		fontFamily: 'AppleGothic',
		textAlign: 'center',
		paddingTop: 3,
		flex: 1 //Step 3
	},
	statusBarMargin: {
		marginTop: (Platform.OS == 'ios') ? 20 : 0
	}
};

export { Header };
