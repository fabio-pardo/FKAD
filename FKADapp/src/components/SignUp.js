import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Content, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {
  HeaderWithoutMenu,
  InputV2,
  Button,
  Confirm
} from './common';


class SignUp extends Component {
  state={ showModal: false };

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

  setModalVisible(visible) {
    this.setState({ showModal: visible });
  }

  render() {
    const {
      singleInputStyle,
      twoInputStyle,
      threeInputStyle,
      rowInputViewStyle
    } = styles;

    const { visible } = this.props;

    return (
      <Container>
        <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={() => {}}
        >
          <View style={{ backgroundColor: 'white', height: '100%' }}>
            <HeaderWithoutMenu
              headerTitle="SignUp"
            />
            <Content style={{ margin: 20, marginTop: 0 }}>
              <View style={rowInputViewStyle}>
                <InputV2 label="First Name" style={twoInputStyle} />
                <InputV2 label="Last Name" style={twoInputStyle} />
              </View>
              <View>
                <InputV2 label="G-Mail" style={singleInputStyle} />
                <InputV2 label="Phone Number" style={singleInputStyle} />
                <InputV2 label="Street Address" style={singleInputStyle} />
              </View>
              <View style={rowInputViewStyle}>
                <InputV2 label="City" style={threeInputStyle} />
                <InputV2 label="State" style={threeInputStyle} />
                <InputV2 label="Zip" style={threeInputStyle} />
              </View>
              <View>
                <InputV2 label="Enter Password" style={singleInputStyle} />
                <InputV2 label="Confirm Password" style={singleInputStyle} />
              </View>
              <View style={rowInputViewStyle}>
                <Button
                  onPress={() => {
                    this.setState({
                      showModal: !this.state.showModal
                    });
                  }}
                >Cancel</Button>
                <Button>Confirm</Button>
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
  }
};

export default SignUp;
