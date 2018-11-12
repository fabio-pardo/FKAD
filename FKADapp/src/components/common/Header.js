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
					hidden={false}
					translucent
					networkActivityIndicatorVisible
				/>
				<View style={styles.toolbar}>
					<TouchableOpacity
						onPress={() => {
							this.setState({ showMenu: !this.state.showMenu });
						}}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: '#3982B6',
								justifyContent: 'center',
								width: 56
							}}
						>
							<Image
								style={{ width: 56 }}
								source={require('../../images/menuIcon.png')}
							/>
						</View>
					</TouchableOpacity>
					<Text style={styles.toolbarTitle}>
						{this.props.headerTitle}
					</Text>
					<Menu
						visible={this.state.showMenu}
						onPress={() => {
							this.setState({ showMenu: !this.state.showMenu });
						}}
						user={this.props.user}
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	toolbar: {
		flexDirection: 'row' //Step 1
	},
	toolbarTitle: {
		width: '80%',
		color: '#3982B6',
		backgroundColor: 'white',
		fontSize: 35,
		fontFamily: 'AppleGothic',
		textAlign: 'center',
		paddingTop: 5,
		flex: 1 //Step 3
	},
	statusBarMargin: {
		elevation: 3,
		borderBottomColor: '#3982B6',
		borderBottomWidth: 1,
		marginTop: 20
	}
};

export { Header };
