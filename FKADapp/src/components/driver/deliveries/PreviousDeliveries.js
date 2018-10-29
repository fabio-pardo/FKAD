import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { Header } from '../../common';
import OrderCard from '../../myOrders/OrderCard';

class PreviousDeliveries extends Component {
	showDeliveries(deliveries) {
		return deliveries.map((delivery, index) => (
			<OrderCard key={index} order={delivery} user="driver" />
		));
	}

	render() {
		return (
			<Container>
				<Header headerTitle="Previous Deliveries" user="driver" />
				<Content style={styles.containerStyle}>
					{this.showDeliveries(this.props.complete)}
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

// const deliveries = [
// 	{
// 		id: 1,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Complete'
// 	},
// 	{
// 		id: 2,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Complete'
// 	},
// 	{
// 		id: 3,
// 		day: '01.20.2018',
// 		time: '12:00 pm',
// 		status: 'Complete'
// 	}
// ];

const mapStateToProps = state => ({
		complete: state.orders.complete
});

export default connect(mapStateToProps, {})(PreviousDeliveries);
