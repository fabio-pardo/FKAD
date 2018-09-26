import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Menu = ({ visible, onPress }) => {
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
							Actions.dashboard();
						}}
					>
						<Text style={styles.textStyle}>Dashboard</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							Actions.createNewOrder();
						}}
					>
						<Text style={styles.textStyle}>New Order</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.textStyle}>My Orders</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.textStyle}>Settings</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.textStyle}>Log Out</Text>
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		</Modal>
	);
};

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
