import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getAllOrders } from '../../../actions';

import { Header } from '../../common';

class Deliveries extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#ADCBE0', height: '100%' }}>
				<Header headerTitle="Deliveries" user="driver" />
				{console.log(this.props.driver.orders)}
				<TouchableOpacity
					style={styles.boxStyle}
					onPress={() => {
						this.props.getAllOrders(this.props.driver.orders);
						Actions.pendingDeliveries();
					}}
				>
					<Text style={styles.textStyle}>Pending Deliveries</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.boxStyle}
					onPress={() => {
						this.props.getAllOrders(this.props.driver.orders);
						Actions.activeDeliveries();
					}}
				>
					<Text style={styles.textStyle}>Active Deliveries</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.boxStyle}
					onPress={() => {
						this.props.getAllOrders(this.props.driver.orders);
						Actions.previousDeliveries();
					}}
				>
					<Text style={styles.textStyle}>Previous Deliveries</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		color: '#3982B6',
		fontSize: 20,
		fontFamily: 'AppleGothic'
	},
	boxStyle: {
		backgroundColor: 'white',
		borderBottomColor: '#3982B6',
		borderBottomWidth: 2,
		padding: 15,
		elevation: 2
	}
};

const mapStateToProps = state => ({
	pending: state.orders.pending,
	orders: state.orders,
	driver: state.driver
});

export default connect(mapStateToProps, { getAllOrders })(Deliveries);
