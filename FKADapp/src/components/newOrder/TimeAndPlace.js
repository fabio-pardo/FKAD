import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	dayChanged,
	timeChanged,
	placeChanged,
	inKitchenChanged,
	refrigerateChanged,
	refItemChanged,
	refrigerateAddItem,
	refItemDeleted,
	freezeChanged,
	freezeItemDeleted,
	freezeAddItem,
	freezeItemChanged
} from '../../actions';
import { Header, Button, Item, CheckBoxInput, DropDown } from '../common';

class TimeAndPlace extends Component {
	state = { error: false };

	isInside() {
		const { place } = this.props.timeAndPlace;
		if (place.inside) {
			return (
				<View style={styles.kitchenSytle}>
					<CheckBoxInput
						label="Items in the kitchen"
						isChecked={place.kitchen}
						onClick={this.onKitchenChange.bind(
							this,
							(value = !place.kitchen)
						)}
					/>
					{this.isInKitchen()}
				</View>
			);
		}
		return;
	}

	isInKitchen() {
		const { place } = this.props.timeAndPlace;
		if (place.kitchen) {
			return (
				<View style={{ marginLeft: 10 }}>
					<View style={{ marginTop: 10 }}>
						<CheckBoxInput
							label="Refrigerate Items"
							isChecked={place.refrigerate.state}
							onClick={this.onRefrigerateChange.bind(this)}
						/>
						{this.RefrigerateItems()}
					</View>
					<View style={{ marginTop: 10 }}>
						<CheckBoxInput
							label="Freeze Items"
							isChecked={place.freeze.state}
							onClick={this.onFreezeChange.bind(this)}
						/>
						{this.FreezeItems()}
					</View>
				</View>
			);
		}
		return;
	}

	RefrigerateItems() {
		const { refrigerate } = this.props.timeAndPlace.place;
		if (refrigerate.state) {
			return (
				<View>
					{refrigerate.items.map((item, index) => (
						<Item
							key={index}
							value={item}
							onChangeInput={this.onChangeRefItem.bind(
								this,
								(id = index)
							)}
							onDelete={this.onDeleteRefItem.bind(
								this,
								(id = index)
							)}
						/>
					))}
					<TouchableOpacity
						onPress={() => {
							this.props.refrigerateAddItem();
						}}
					>
						<Text style={styles.addStyle}>Add</Text>
					</TouchableOpacity>
				</View>
			);
		}
		return;
	}

	FreezeItems() {
		const { freeze } = this.props.timeAndPlace.place;
		if (freeze.state) {
			return (
				<View>
					{freeze.items.map((item, index) => (
						<Item
							key={index}
							value={item}
							onChangeInput={this.onChangeFreezeItem.bind(
								this,
								(id = index)
							)}
							onDelete={this.onDeleteFreezeItem.bind(
								this,
								(id = index)
							)}
						/>
					))}
					<TouchableOpacity
						onPress={() => {
							console.log('pressed add item');
							this.props.freezeAddItem();
						}}
					>
						<Text style={styles.addStyle}>Add</Text>
					</TouchableOpacity>
				</View>
			);
		}
		return;
	}

	addItem() {
		return (
			<View style={{ margin: 5, marginRight: 20 }}>
				<Item />
			</View>
		);
	}

	onDayChange(value) {
		const date = new Date(value);
		const formatted =
			date.getMonth() +
			1 +
			'.' +
			date.getDate() +
			'.' +
			date.getFullYear();
		this.props.dayChanged(formatted);
	}

	onTimeChange(idx, value) {
		this.props.timeChanged(value);
	}

	onPlaceChange(doorway, inside) {
		this.props.placeChanged({ doorway, inside });
	}

	onKitchenChange(value) {
		this.props.inKitchenChanged(value);
	}

	onRefrigerateChange() {
		this.props.refrigerateChanged();
	}

	onChangeRefItem(id, value) {
		this.props.refItemChanged({ id, value });
	}

	onDeleteRefItem(id) {
		this.props.refItemDeleted(id);
	}

	onFreezeChange() {
		this.props.freezeChanged();
	}

	onChangeFreezeItem(id, value) {
		this.props.freezeItemChanged({ id, value });
	}

	onDeleteFreezeItem(id) {
		this.props.freezeItemDeleted(id);
	}

	isComplete() {
		const { day, time, place } = this.props.timeAndPlace;
		if (
			day &&
			time &&
			((place.doorway && !place.inside) ||
				(!place.doorway && place.inside))
		)
			return true;
		return false;
	}

	renderError() {
		if (this.state.error) {
			return (
				<Text style={styles.errorStyle}>
					All fields must be completed
				</Text>
			);
		}
		return;
	}

	render() {
		const { place } = this.props.timeAndPlace;
		return (
			<Container>
				<Header headerTitle="New Order" />
				<Content style={{ backgroundColor: 'white' }}>
					<View style={styles.containerStyle}>
						<Text style={styles.textStyle}>Time and Place:</Text>
						<View style={{ marginTop: -10 }}>
							<View style={{ marginBottom: 20 }}>
								<Text style={styles.textStyle}>Day: </Text>
								<DatePicker
									defaultDate={new Date(2018, 10, 27)}
									minimumDate={new Date(2018, 10, 27)}
									maximumDate={new Date(2018, 12, 31)}
									locale={'en'}
									timeZoneOffsetInMinutes={undefined}
									modalTransparent={false}
									animationType={'fade'}
									androidMode={'default'}
									placeHolderText="Select date"
									textStyle={styles.dateStyle}
									placeHolderTextStyle={styles.dateStyle}
									onDateChange={this.onDayChange.bind(this)}
								/>
							</View>
							<Text style={styles.timeStyle}>Time: </Text>
							<DropDown
								label=" Select Time "
								options={times}
								onSelect={this.onTimeChange.bind(this)}
							/>
							<Text style={styles.textStyle}>
								Place Order At:{' '}
							</Text>
							<View style={styles.horizontalStyle}>
								<CheckBoxInput
									label="Doorway"
									isChecked={place.doorway}
									onClick={this.onPlaceChange.bind(
										this,
										(doorway = true),
										(inside = false)
									)}
								/>
								<CheckBoxInput
									label="Inside"
									isChecked={place.inside}
									onClick={this.onPlaceChange.bind(
										this,
										(doorway = false),
										(inside = true)
									)}
								/>
							</View>
						</View>

						{this.isInside()}
						<View style={{ marginTop: 5, marginBottom: -10 }}>
							{this.renderError()}
						</View>
						<View style={styles.buttonStyle}>
							<Button
								onPress={() => {
									Actions.pop();
								}}
							>
								&#8826;&#8826; Back
							</Button>
							<Button
								onPress={() => {
									if (this.isComplete()) {
										this.setState({ error: false });
										Actions.dropOff();
									} else this.setState({ error: true });
								}}
							>
								Next &#8827;&#8827;
							</Button>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	containerStyle: {
		margin: 10,
		marginTop: 5,
		height: '100%'
	},
	textStyle: {
		marginTop: 20,
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6'
	},
	dateStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: 'white',
		backgroundColor: '#88B4D3',
		borderRadius: 10,
		padding: 3,
		fontWeight: 'bold',
		margin: 10,
		position: 'absolute'
	},
	timeStyle: {
		marginTop: 30,
		fontSize: 20,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		marginBottom: 5
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	},
	horizontalStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	kitchenSytle: {
		marginTop: 10,
		margin: 3
	},
	errorStyle: {
		fontSize: 18,
		fontFamily: 'AppleGothic',
		color: '#B64F39',
		textAlign: 'center'
	},
	addStyle: {
		fontSize: 15,
		fontFamily: 'AppleGothic',
		color: '#3982B6',
		textDecorationLine: 'underline'
	}
};

const times = [
	'9:00 am',
	'10:00 am',
	'11:00 am',
	'12:00 pm',
	'1:00 pm',
	'2:00 pm',
	'3:00 pm',
	'4:00 pm',
	'5:00 pm',
	'6:00 pm',
	'7:00 pm',
	'8:00 pm',
	'9:00 pm'
];

const mapStateToProps = state => {
	return {
		timeAndPlace: state.newOrder.timeAndPlace
	};
};

export default connect(mapStateToProps, {
	dayChanged,
	timeChanged,
	placeChanged,
	inKitchenChanged,
	refrigerateChanged,
	refrigerateAddItem,
	freezeChanged,
	refItemDeleted,
	refItemChanged,
	freezeItemDeleted,
	freezeItemChanged,
	freezeAddItem
})(TimeAndPlace);
