import React, { Component } from 'react';
import {
	View,
	Text,
	Modal,
	Image,
	TouchableOpacity,
	StatusBar,
	Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Confirm } from './Confirm';

class Menu extends Component {
	state = { showModal: false };

	onLogoutAccept() {
		//Should sign out UID from AWS
		//Should return to main menu
		this.setState({ showModal: false });
		Actions.login();
		//BUG: Menu closes on logoutAccept but slowly, possibly fade bug
	}

	onLogoutDecline() {
		this.setState({ showModal: false });
	}

	hideNavBar() {
		this.props.onPress();
	}

	userIsDriver() {
		return (
			<View>
				<TouchableOpacity
					onPress={() => {
						this.hideNavBar();
					}}
				>
					<Text style={styles.textStyle}>Deliveries</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						this.hideNavBar();
					}}
				>
					<Text style={styles.textStyle}>Settings</Text>
				</TouchableOpacity>
			</View>
		);
	}

	userIsCustomer() {
		return (
			<View>
				<TouchableOpacity
					onPress={() => {
						this.hideNavBar();
						Actions.myOrdersList();
					}}
				>
					<Text style={styles.textStyle}>My Orders</Text>
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
						Actions.settings();
					}}
				>
					<Text style={styles.textStyle}>Settings</Text>
				</TouchableOpacity>
			</View>
		);
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
							<StatusBar
								barStyle="dark-content"
								hidden={false}
								translucent={true}
								backgroundColor="#ADCBE0"
								networkActivityIndicatorVisible={true}
							/>
							<Image
								style={styles.imageStyle}
								source={require('../../images/menuIcon.png')}
							/>
						</TouchableOpacity>

						{this.props.user == 'driver'
							? this.userIsDriver()
							: this.userIsCustomer()}

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
		marginLeft: 5,
		marginTop: Platform.OS === 'ios' ? 20 : 0
	},
	containerStyle: {
		width: '50%',
		height: '100%',
		backgroundColor: '#3982B6'
	},
	imageStyle: {
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		height: 55
	}
};

export default Menu;
