import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
	dayChanged,
	timeChanged,
	placeChanged,
	inKitchenChanged,
	refrigerateChanged,
	freezeChanged
} from '../../actions';
import {
	Header,
	Button,
	Items,
	Input,
	InputThree,
	CheckBoxInput,
	DropDown
} from '../common';

class TimeAndPlace extends Component {
	state = {
		isCheckedInKitchen: false,
		isCheckedRefrigerate: false,
		isCheckedFreeze: false
	};

	isInside() {
		const { place } = this.props.dayAndTime;
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
		const { place } = this.props.dayAndTime;
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
		const { refrigerate } = this.props.dayAndTime.place;
		if (refrigerate.state) {
			return this.addItem();
		}
		return;
	}

	FreezeItems() {
		const { freeze } = this.props.dayAndTime.place;
		if (freeze.state) {
			return this.addItem();
		}
		return;
	}

	addItem() {
		return (
			<View style={{ margin: 5, marginRight: 20 }}>
				<Items />
			</View>
		);
	}

	onDayChange(today, tomorrow) {
		this.props.dayChanged({ today, tomorrow });
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

	onFreezeChange() {
		this.props.freezeChanged();
	}

	render() {
		const { day, time, place } = this.props.dayAndTime;
		return (
			<View>
				<Header headerTitle="New Order" />
				<View style={{ backgroundColor: 'white' }}>
					<View style={styles.containerStyle}>
						<Text style={styles.textStyle}>Time and Place:</Text>
						<View style={{ marginTop: -5 }}>
							<Text style={styles.textStyle}>Day</Text>
							<View style={styles.todayTomorrowStyle}>
								<CheckBoxInput
									label="Today"
									isChecked={day.today}
									onClick={this.onDayChange.bind(
										this,
										(today = true),
										(tomorrow = false)
									)}
								/>
								<CheckBoxInput
									label="Tomorrow"
									isChecked={day.tomorrow}
									onClick={this.onDayChange.bind(
										this,
										(today = false),
										(tomorrow = true)
									)}
								/>
							</View>
							<Text style={styles.textStyle}>Time: </Text>
							<DropDown
								label=" Select Time "
								options={times}
								onSelect={this.onTimeChange.bind(this)}
							/>
							<Text style={styles.textStyle}>
								Place Order At:{' '}
							</Text>
							<View style={styles.todayTomorrowStyle}>
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
									Actions.deliverTo();
								}}
							>
								Next &#8827;&#8827;
							</Button>
						</View>
					</View>
				</View>
			</View>
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
	threeInputsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	},
	todayTomorrowStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	kitchenSytle: {
		marginTop: 10,
		margin: 3
	}
};

const times = [
	'12:00 am',
	'1:00 am',
	'2:00 am',
	'3:00 am',
	'4:00 am',
	'5:00 am',
	'6:00 am',
	'7:00 am',
	'8:00 am',
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
	'9:00 pm',
	'10:00 pm',
	'11:00 pm'
];

const mapStateToProps = state => {
	return {
		dayAndTime: state.newOrder.dayAndTime
	};
};

export default connect(mapStateToProps, {
	dayChanged,
	timeChanged,
	placeChanged,
	inKitchenChanged,
	refrigerateChanged,
	freezeChanged
})(TimeAndPlace);
