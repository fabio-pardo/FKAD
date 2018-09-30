import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';
import { Actions } from 'react-native-router-flux';

const OrderCard = ({ order }) => {
	return (
		<View
			style={{
				backgroundColor:
					order.status == 'On Time' ? '#D5E5F0' : 'white',
				padding: 15,
				paddingLeft: 20
			}}
		>
			<Text style={styles.textStyle}>Order {order.id}</Text>
			<View style={{ marginTop: 15, marginBottom: 10 }}>
				<Text style={styles.textStyle}>Day: {order.day}</Text>
				<Text style={styles.textStyle}>Time: {order.time}</Text>
				<Text style={styles.textStyle}>Status: {order.status}</Text>
			</View>
			<Button
				onPress={() => {
					Actions.viewOrder(order);
				}}
			>
				View
			</Button>
		</View>
	);
};

const styles = {
	textStyle: {
		color: '#3982B6',
		fontSize: 23,
		fontFamily: 'AppleGothic'
	}
};

export default OrderCard;
