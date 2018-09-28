import React, { Component } from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Confirm } from './Confirm';

class Menu extends Component {
	state = { showModal: false };

	onLogoutAccept() {
		//Should sign out UID from AWS
		//Should return to main menu
		this.setState({ showModal: false });
		Actions.login();
		//BUG: Menu Doesn't Close On LogOutAccept on iOS (It Should)
	}

	onLogoutDecline() {
		//BUG: MENU Doesn't Close on LogOutDeny on iOS (It Should)
		this.setState({ showModal: false });
	}

	hideNavBar() {
		this.props.onPress();
	}

	render() {
		const { onPress, visible } = this.props;

		return (
			<Modal
				visible={visible}
				transparent
				animationType="fade"
				onRequestClose={() => {}}
			>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.containerStyle}>
						<TouchableOpacity onPress={onPress}>
							<Image
								style={{ height: 55 }}
								source={require('../../images/menuIcon.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.hideNavBar();
								Actions.dashboard();
							}}
						>
							<Text style={styles.textStyle}>Dashboard</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.hideNavBar();
								Actions.createNewOrder();
							}}
						>
							<Text style={styles.textStyle}>New Order</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.hideNavBar();
							}}
						>
							<Text style={styles.textStyle}>My Orders</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.hideNavBar();
							}}
						>
							<Text style={styles.textStyle}>Settings</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									showModal: !this.state.showModal
								});
							}}
						>
							<Text style={styles.textStyle}>Log Out</Text>
						</TouchableOpacity>

						<Confirm
							visible={this.state.showModal}
							onAccept={this.onLogoutAccept.bind(this)}
							onDecline={this.onLogoutDecline.bind(this)}
						>
							Are You Sure You Want To Log Out?
						</Confirm>
					</View>
				</TouchableOpacity>
			</Modal>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: 'white',
		padding: 5,
		marginLeft: 5
	},
	containerStyle: {
		width: '50%',
		height: '100%',
		backgroundColor: '#3982B6'
	}
};

export default Menu;
