import React, {Component} from 'react';
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
import {connect} from 'react-redux';
import {changeCampus} from '../../redux/actions';
import {CHANGECAMPUS} from '../../constants';
class PickerInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: '',
    };
  }

  componentDidUpdate() {
    if (!this.state.selected2) {
      this.setState({
        selected2: this.props.auth.loggedInUserDetails.user_campus[0].campus_id,
      });
    }
  }
  onValueChange2(value) {
    this.props.dispatch(
      changeCampus({
        type: CHANGECAMPUS,
        payload: {id: value},
      }),
    );
  }
  render() {
    return (
      <View style={{padding: 20}}>
        <H3 style={{color: '#006add'}}>
          {' '}
          {this.props.auth.loggedInUserDetails.school_name}{' '}
        </H3>
        <Item bordered regular style={{borderRadius: 10, borderColor: 'grey'}}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{color: '#37b349'}}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue={this.props.auth.selectedCampusDetails.campus_id}
            onValueChange={this.onValueChange2.bind(this)}>
            {this.props.auth.loggedInUserDetails.user_campus.map(item => (
              <Picker.Item label={item.campus_name} value={item.campus_id} />
            ))}
          </Picker>
        </Item>
      </View>
    );
  }
}
{
  /* <Select
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
      </Select> */
}
export default connect(state => {
  console.log('state === ', state);
  return {
    auth: state.authReducer,
    loader: state.loaderReducer,
  };
})(PickerInputExample);
