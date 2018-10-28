import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { getAllOrders } from '../../../actions';

import { Header } from '../../common';

import OrderCard from '../../myOrders/OrderCard';

class PendingDeliveries extends Component {
	showDeliveries(deliveries) {
		return deliveries.map(delivery => (
			<OrderCard key={delivery.id} order={delivery} user="driver" />
		));
	}

	render() {
		getAllOrders();
		return (
			<Container>
				<Header headerTitle="Pending Deliveries" user="driver" />
				<Content style={styles.containerStyle}>
					{this.showDeliveries(this.props.pending)}
				</Content>
			</Container>
		);
	}
}

// const deliveries = [
// 	{
// 		id: 1,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Pending'
// 	},
// 	{
// 		id: 2,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Pending'
// 	},
// 	{
// 		id: 3,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Pending'
// 	}
// ];

const styles = {
	containerStyle: {
		height: '100%',
		backgroundColor: 'white'
	}
};

const mapStateToProps = state => {
	return {
		pending: state.orders.pending
	};
};

export default connect(mapStateToProps, {getAllOrders})(PendingDeliveries);
