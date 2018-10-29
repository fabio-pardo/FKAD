import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { Header } from '../../common';

import OrderCard from '../../myOrders/OrderCard';

class ActiveDeliveries extends Component {
	showDeliveries(deliveries) {
		return deliveries.map((delivery, index) => (
			<OrderCard key={index} order={delivery} user="driver" />
		));
	}

	render() {
		return (
			<Container>
				<Header headerTitle="Active Deliveries" user="driver" />
				<Content style={styles.containerStyle}>
					{this.showDeliveries(this.props.active)}
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

const mapStateToProps = state => ({
	active: state.orders.active
});

export default connect(mapStateToProps, {})(ActiveDeliveries);
