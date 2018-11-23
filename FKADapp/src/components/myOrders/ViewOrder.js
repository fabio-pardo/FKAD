import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Header, Button } from '../common';

class ViewOrder extends Component {
	placeOrder() {
		if (this.props.inside === 'true') {
			return (
				<View style={{ marginTop: 3 }}>
					<Text style={styles.subtitleStyle}>
						Place Order: Inside
					</Text>
					{this.props.kitchen === 'true' ? this.inKitchen() : ''}
				</View>
			);
		}
		return (
			<View style={{ marginTop: 3 }}>
				<Text style={styles.subtitleStyle}>Place Order: Doorway</Text>
			</View>
		);
	}

	inKitchen() {
		return (
			<View>
				{this.props.refrigerateState === 'true' ? (
					<View>
						<Text style={styles.subtitleStyle}>
							Items in the Refrigerator:
						</Text>
						<View style={styles.verticalStyle}>
							{this.props.refrigerateItems.map((item, index) => (
								<Text key={index} style={styles.textStyle}>
									-{' '}
									{item.charAt(0).toUpperCase() +
										item.slice(1)}
								</Text>
							))}
						</View>
					</View>
				) : (
					<Text style={styles.subtitleStyle}>
						Items in the Refrigerator: None
					</Text>
				)}
				{this.props.freezeState === 'true' ? (
					<View>
						<Text style={styles.subtitleStyle}>
							Items in the Freezer:
						</Text>
						<View style={styles.verticalStyle}>
							{this.props.freezeItems.map((item, index) => (
								<Text key={index} style={styles.textStyle}>
									-{' '}
									{item.charAt(0).toUpperCase() +
										item.slice(1)}
								</Text>
							))}
						</View>
					</View>
				) : (
					<Text style={styles.subtitleStyle}>
						Items in the Freezer: None
					</Text>
				)}
			</View>
		);
	}

	hasDriver() {
		if (this.props.status !== 'pending') {
			return (
				<View style={{ marginTop: 5 }}>
					<Text style={styles.titleStyle}>
						Driver: {this.props.driverFirst} {this.props.driverLast}
					</Text>
				</View>
			);
		}
		return;
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white' }}>
				<Header headerTitle="My Orders" />
				<View style={styles.containerStyle}>
					{console.log(this.props)}
					<Text style={styles.statusStyle}>
						Order Status:{' '}
						{this.props.status.charAt(0).toUpperCase() +
							this.props.status.slice(1)}
					</Text>
					<View style={{ margin: 5 }}>
						{this.hasDriver()}
						<View style={{ marginTop: 5 }}>
							<Text style={styles.titleStyle}>Pick Up</Text>
							<View>
								<Text style={styles.subtitleStyle}>
									{this.props.storeName}
								</Text>
								<Text style={styles.subtitleStyle}>
									{this.props.storeStreet},{' '}
									{this.props.storeCity},{' '}
									{this.props.storeState},{' '}
									{this.props.storeZipcode}
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 5 }}>
							<Text style={styles.titleStyle}>Drop-Off</Text>
							<View style={{ marginTop: 3 }}>
								<Text style={styles.subtitleStyle}>
									{this.props.clientName}{' '}
									{this.props.clientLastName}
								</Text>
								<Text style={styles.subtitleStyle}>
									{this.props.clientStreet},{' '}
									{this.props.clientCity},{' '}
									{this.props.clientState},{' '}
									{this.props.clientZipcode}
								</Text>
								<Text style={styles.subtitleStyle}>
									{this.props.day} {this.props.time}
								</Text>
							</View>
							{this.placeOrder()}
						</View>
					</View>
					<View style={styles.buttonStyle}>
						<Button
							onPress={() => {
								Actions.pop();
							}}
						>
							Back
						</Button>
						<Button
							onPress={() => {
								//watch vide using this.props.url
								console.log('watching video');
								console.log(this.props.url);
								if (this.props.url !== '' && this.props.url !== 'pending' && this.props.url !== 'active') {
									Actions.watchYouTubeVideo();
								}
							}}
						>
							Watch Video
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: '100%',
		margin: 10
	},
	titleStyle: {
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	subtitleStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	statusStyle: {
		fontSize: 22,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	},
	textStyle: {
		fontSize: 15,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	verticalStyle: {
		flexDirection: 'column',
		marginLeft: 5
	}
};

export default ViewOrder;
