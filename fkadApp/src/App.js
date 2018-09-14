import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Button, Input, InputLogIn } from './components/common';

class App extends Component {
	render() {
		return (
			<View>
				<Image source={require('./images/logo.png')} />
				<Text>Hello</Text>
				<Text>Hello</Text>
				<Text>Hello</Text>
				<Button
					onPress={() => {
						console.log('click');
					}}
				>
					Send
				</Button>
				<Button>Click me</Button>
				<Input />
				<InputLogIn />
			</View>
		);
	}
}

export default App;
