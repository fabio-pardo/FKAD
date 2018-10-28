import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import { Header } from '../../common';

import OrderCard from '../../myOrders/OrderCard';

class PendingDeliveries extends Component {
	showDeliveries(deliveries) {
		return deliveries.map(delivery => (
			<OrderCard key={delivery.id} order={delivery} user="driver" />
		));
	}

	render() {
		return (
			<Container>
				<Header headerTitle="Pending Deliveries" user="driver" />
				<Content style={styles.containerStyle}>
					{this.showDeliveries(deliveries)}
				</Content>
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		height: '100%',
		backgroundColor: 'white'
	}
};

//hardcode orders. Create action that calls all orders on the database
const deliveries = [
	{
		id: 1,
		day: '01.20.2018',
		time: '12:00 pm',
		status: 'Pending'
	},
	{
		id: 2,
		day: '01.20.2018',
		time: '12:00 pm',
		status: 'Pending'
	},
	{
		id: 3,
		day: '01.20.2018',
		time: '12:00 pm',
		status: 'Pending'
	}
];

export default PendingDeliveries;
