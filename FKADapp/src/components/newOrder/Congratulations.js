import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Header, Button } from '../common';
import { getAllOrders } from '../../actions';

class Congratulations extends Component {
	render() {
		return (
			<View>
				<Header headerTitle="New Order" />
				<View style={styles.containerStyle}>
					<Image
						style={{ marginTop: 40, margin: 10 }}
						source={require('../../images/houseLogo.png')}
					/>
					<View style={{ alignItems: 'center', marginBottom: 20 }}>
						<Text style={styles.titleStyle}>
							Congratulations your order has been placed!
						</Text>
						<Text style={styles.subtitleStyle}>
							Go to my orders to review your order. You will
							recieve a notification with all the details once
							your order is approved.
						</Text>
					</View>
					<Button
						onPress={() => {
							this.props.getAllOrders(this.props.user.order);
							Actions.myOrders();
						}}
					>
						My Orders
					</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		backgroundColor: 'white',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center'
	},
	titleStyle: {
		fontSize: 23,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		margin: 10,
		textAlign: 'center'
	},
	subtitleStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		textAlign: 'center',
		margin: 12
	}
};

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, { getAllOrders })(Congratulations);
