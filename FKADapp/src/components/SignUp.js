import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';
import { Content, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  nameChanged,
  homeAddressChanged,
  GMailChanged,
  phoneChanged,
  newPasswordChanged,
  newWiFiChanged,
  newBoxIDChanged,
  createNewUser,
  getUser
} from '../actions';

import {
  HeaderWithoutMenu,
  Input,
  InputTwo,
  InputThree,
  Button,
  Confirm
} from './common';

class SignUp extends Component {
  //this state determines to not show the Modal until true,
  // and to not show error message until true for incomplete fields.
  state = { showModal: false, error: false };

  //the following methods are used when the input texts
  //for each respectively changes
  onNameChange(type, text) {
    this.props.nameChanged({ type, text });
  }

  onGMailChange(text) {
    this.props.GMailChanged(text);
  }

  onPhoneNumberChange(text) {
    this.props.phoneChanged(text);
  }

  onHomeAddressChange(type, text) {
    this.props.homeAddressChanged({ type, text });
  }

  onPasswordChange(text) {
    this.props.newPasswordChanged(text);
  }

  onBoxIDChange(text) {
    this.props.newBoxIDChanged(text);
  }

  onWiFiChange(type, text) {
    this.props.newWiFiChanged({ type, text });
  }

  //The following methods are for the modal
  onCancelAccept() {
    //Should sign out UID from AWS
    //Should return to main menu
    this.setState({ showModal: false });

    Actions.pop();
    //BUG: Menu closes on logoutAccept but slowly, possibly fade bug
  }

  onCancelDecline() {
    this.setState({ showModal: false });
  }

  onCreateNewUser() {
    this.setState({ error: false });
    console.log(this.props.signup);
    this.props.createNewUser(this.props.signup);
  }

  setModalVisible(visible) {
    this.setState({ showModal: visible });
  }

  //method to determine if signup fields are filled. true - yes, false - no
  signupFieldsComplete() {
    const {
      name,
      GMail,
      phoneNumber,
      homeAddress,
      password,
      WiFi,
      boxID
    } = this.props.signup;

    //if name, gmail, phone and homeaddress exists and
    //if the passwords == to one another then the fields are complete
    if (
      name.firstName &&
      name.lastName &&
      GMail &&
      phoneNumber &&
      homeAddress.street &&
      homeAddress.city &&
      homeAddress.state &&
      homeAddress.zip &&
      password &&
      WiFi.wifiName &&
      WiFi.wifiPassword &&
      boxID
    ) {
      return true;
    }

    return false;
  }

  //method used to tell the user that fields were not filled
  renderError() {
    if (this.state.error) {
      return (
        <Text style={styles.errorStyle}>All Fields Must Be Completed</Text>
      );
    }
  }

  render() {
    //refactoring styles
    const {
      singleInputStyle,
      twoInputStyle,
      threeInputStyle,
      rowInputViewStyle
    } = styles;

    const { visible } = this.props;

    const {
      name,
      GMail,
      phoneNumber,
      homeAddress,
      password,
      boxID,
      WiFi
    } = this.props.signup;

    return (
      <Container>
        <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={() => {}}
        >
          <View style={{ backgroundColor: 'white', height: '100%' }}>
            <HeaderWithoutMenu headerTitle="SignUp" />
            <Content
              style={{ paddingLeft: 20, paddingRight: 20, marginTop: 0 }}
            >
              <View style={rowInputViewStyle}>
                <InputTwo
                  label="First Name"
                  style={twoInputStyle}
                  onChangeText={this.onNameChange.bind(
                    this,
                    (type = 'firstName')
                  )}
                  value={name.firstName}
                />
                <InputTwo
                  label="Last Name"
                  style={twoInputStyle}
                  value={name.lastName}
                  onChangeText={this.onNameChange.bind(
                    this,
                    (type = 'lastName')
                  )}
                />
              </View>
              <View>
                <Input
                  label="G-Mail"
                  style={singleInputStyle}
                  value={GMail}
                  onChangeText={this.onGMailChange.bind(this)}
                />
                <Input
                  label="Phone Number"
                  style={singleInputStyle}
                  value={phoneNumber}
                  onChangeText={this.onPhoneNumberChange.bind(this)}
                />
                <Input
                  label="Street Address"
                  style={singleInputStyle}
                  value={homeAddress.street}
                  onChangeText={this.onHomeAddressChange.bind(
                    this,
                    (type = 'street')
                  )}
                />
              </View>
              <View style={rowInputViewStyle}>
                <InputThree
                  label="City"
                  style={threeInputStyle}
                  value={homeAddress.city}
                  onChangeText={this.onHomeAddressChange.bind(
                    this,
                    (type = 'city')
                  )}
                />
                <InputThree
                  label="State"
                  style={threeInputStyle}
                  value={homeAddress.state}
                  onChangeText={this.onHomeAddressChange.bind(
                    this,
                    (type = 'state')
                  )}
                />
                <InputThree
                  label="Zip"
                  style={threeInputStyle}
                  value={homeAddress.zip}
                  onChangeText={this.onHomeAddressChange.bind(
                    this,
                    (type = 'zip')
                  )}
                />
              </View>
              <View>
                <Input
                  label="Box ID"
                  style={singleInputStyle}
                  value={boxID}
                  onChangeText={this.onBoxIDChange.bind(this)}
                />
                <Input
                  label="Wi-Fi"
                  style={singleInputStyle}
                  value={WiFi.wifiName}
                  onChangeText={this.onWiFiChange.bind(
                    this,
                    (type = 'wifiName')
                  )}
                />
                <Input
                  label="Wi-Fi Password"
                  style={singleInputStyle}
                  value={WiFi.wifiPassword}
                  onChangeText={this.onWiFiChange.bind(
                    this,
                    (type = 'wifiPassword')
                  )}
                />
                <Input
                  label="Enter Desired Password"
                  style={singleInputStyle}
                  secureTextEntry
                  value={password}
                  onChangeText={this.onPasswordChange.bind(this)}
                />
              </View>
              {this.renderError()}
              <View style={rowInputViewStyle}>
                <Button
                  onPress={() => {
                    this.setState({
                      showModal: !this.state.showModal
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    if (this.signupFieldsComplete()) {
                      this.onCreateNewUser();
                    } else {
                      this.setState({ error: true });
                    }
                  }}
                >
                  SignUp
                </Button>
              </View>
              <Confirm
                visible={this.state.showModal}
                onAccept={this.onCancelAccept.bind(this)}
                onDecline={this.onCancelDecline.bind(this)}
              >
                Are you sure you want to cancel?
              </Confirm>
            </Content>
          </View>
        </Modal>
      </Container>
    );
  }
}

const styles = {
  rowInputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  singleInputStyle: {
    color: 'white',
    backgroundColor: '#ADCBE0',
    fontFamily: 'AppleGothic',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    lineHeight: 23,
    flex: 1,
    width: '100%',
    alignSelf: 'stretch'
  },
  twoInputStyle: {
    color: 'white',
    backgroundColor: '#ADCBE0',
    fontFamily: 'AppleGothic',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    lineHeight: 23,
    flex: 1,
    width: 160,
    alignSelf: 'stretch'
  },
  threeInputStyle: {
    color: 'white',
    backgroundColor: '#ADCBE0',
    fontFamily: 'AppleGothic',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    lineHeight: 23,
    flex: 1,
    width: 100,
    alignSelf: 'stretch'
  },
  errorStyle: {
    fontSize: 18,
    fontFamily: 'AppleGothic',
    color: '#B64F39',
    textAlign: 'center'
  }
};

// export default SignUp;
const mapStateToProps = state => {
  return {
    signup: state.signUp.user
  };
};

export default connect(mapStateToProps, {
  nameChanged,
  homeAddressChanged,
  GMailChanged,
  phoneChanged,
  newPasswordChanged,
  newBoxIDChanged,
  newWiFiChanged,
  createNewUser,
  getUser
})(SignUp);
