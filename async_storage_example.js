import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ImagePicker from 'react-native-image-picker';

export default class AsyncStorageExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myKey: null
		};
	}

	getKey = () => {
		AsyncStorage.getItem('token').then((value) => this.setState({ myKey: value }));
	};

	saveKey = (value) => {
		AsyncStorage.setItem('token', value);
	};

	resetKey = () => {
		AsyncStorage.removeItem('token');
		AsyncStorage.getItem('token').then((value) => this.setState({ myKey: value }));
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to Demo AsyncStorage!</Text>

				<TextInput
					style={styles.formInput}
					placeholder="Enter key you want to save!"
					value={this.state.myKey}
					onChangeText={(value) => this.saveKey(value)}
				/>

				<Button
					style={styles.formButton}
					onPress={this.getKey}
					title="Get Key"
					color="#2196f3"
					accessibilityLabel="Get Key"
				/>

				<Button
					style={styles.formButton}
					onPress={this.resetKey}
					title="Reset"
					color="#f44336"
					accessibilityLabel="Reset"
				/>

				<Text style={styles.instructions}>Stored key is = {this.state.myKey}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	formInput: {
		paddingLeft: 5,
		height: 50,
		borderWidth: 1,
		borderColor: '#555555'
	},
	formButton: {
		borderWidth: 1,
		borderColor: '#555555'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		marginTop: 5
	}
});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);
