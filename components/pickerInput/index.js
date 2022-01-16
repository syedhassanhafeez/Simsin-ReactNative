import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Select,
  CheckIcon,
  View,
  Item,
  Picker,
  Icon,
  H3,
} from 'native-base';
export default class PickerInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: 'key0',
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <View style={{ padding: 20 }}>
        <H3 style={{ color: '#006add' }}> {`XYZ School Name `} </H3>
        <Item bordered regular style={{ borderRadius: 10, borderColor: 'grey' }}  >
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ color: '#37b349' }}
            placeholder="Select your SIM"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}>
            <Picker.Item label="Campus 1" value="key0" />
            <Picker.Item label="Campus 2" value="key1" />
            <Picker.Item label="Campus 3" value="key2" />
            <Picker.Item label="Campus 4" value="key3" />
            <Picker.Item label="Campus 5" value="key4" />
          </Picker>

        </Item>
      </View>
    );
  }
}
{/* <Select
        selectedValue={this.state.selected2}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
          onValueChange={this.onValueChange2.bind(this)}>
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select> */}