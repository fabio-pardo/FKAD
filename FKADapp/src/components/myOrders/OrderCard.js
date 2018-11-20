import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';
import { Actions } from 'react-native-router-flux';

const OrderCard = ({ order, user, activeID }) => {
	return (
		<View
			style={{
				backgroundColor:
					order.status == 'pending' || order.status == 'active'
						? '#D5E5F0'
						: 'white',
				padding: 15,
				paddingLeft: 20,
				borderBottomColor: '#88B4D3',
				borderBottomWidth: 1,
				elevation: 1
			}}
		>
			<Text style={styles.textStyle}>Order #: {order.orderNumber}</Text>
			<View style={{ marginTop: 15, marginBottom: 10 }}>
				<Text style={styles.textStyle}>Day: {order.day}</Text>
				<Text style={styles.textStyle}>Time: {order.time}</Text>
				<Text style={styles.textStyle}>Status: {order.status}</Text>
			</View>
			<Button
				onPress={() => {
					if (user === 'customer') Actions.viewOrder(order);
					if (user === 'driver') {
						Actions.viewDelivery({ order, activeID });
					}
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
		fontSize: 20,
		fontFamily: 'AppleGothic'
	}
};

export default OrderCard;
