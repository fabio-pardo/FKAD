import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = ({ headerTitle }) => {
	return (
		<View>
			<View style={styles.toolbar}>
				<TouchableOpacity
					onPress={() => {
						console.log('menu');
					}}
				>
					<Image
						style={{ height: 55 }}
						source={require('../../images/menuIcon.png')}
					/>
				</TouchableOpacity>
				<Text style={styles.toolbarTitle}>{headerTitle}</Text>
			</View>
		</View>
	);
};

const styles = {
	toolbar: {
		backgroundColor: 'white',
		flexDirection: 'row' //Step 1
	},
	toolbarTitle: {
		width: '80%',
		color: '#3982B6',
		fontSize: 35,
		fontFamily: 'AppleGothic',
		textAlign: 'center',
		paddingTop: 3,
		flex: 1 //Step 3
	}
};

export { Header };
