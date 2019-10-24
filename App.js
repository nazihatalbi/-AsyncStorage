import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	StatusBar,
	TouchableOpacity,
	PermissionsAndroid
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const options = {
	title: 'my picture app',
	takePhotoButtonTitle: 'Take photo with your camera',
	chooseFromLibraryButtonTitle: 'Choose photo from library'
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource: null,
			pic: null,
			granted: true
		};
	}

	myfun = () => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('Image Picker Error: ', response.error);
			} else {
				let source = { uri: response.uri };

				this.setState({
					avatarSource: source,
					pic: response.data
				});
			}
		});
	};

	componentDidMount() {
		this.requestCameraPermission();
	}

	async requestCameraPermission() {
		PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
			title: 'Cool camera tracking App Permission',
			message: 'This Cool App needs access to your camera '
		})
			.then((granted) => {
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					this.justStart();
					alert('You can use the app');
				} else {
					alert('You can not use the app');
				}
			})
			.catch((e) => console.warn(e));
	}

	render() {
		return (
			<React.Fragment>
				<TouchableOpacity style={{ backgroundColor: 'green', margin: 10, padding: 10 }} onPress={this.myfun}>
					<Text style={{ color: '#fff' }}>Select Image</Text>
				</TouchableOpacity>
				<View>
					<Image source={this.state.avatarSource} style={{ width: '100%', height: 300, margin: 10 }} />
				</View>
			</React.Fragment>
		);
	}
}
