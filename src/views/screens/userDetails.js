import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class userDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    console.log(this.props.route.params.Details);
  };

  render() {
    const Details = this.props.route.params.Details;

    const labels = [
      {
        label: 'name',
        value: Details.name,
      },
      {
        label: 'username',
        value: Details.username,
      },
      {
        label: 'company name',
        value: Details.company.name,
      },
      {
        label: 'Website',
        value: Details.website,
      },
      {
        label: 'Phone',
        value: Details.phone,
      },
    ];

    return (
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
          User details
        </Text>
        <View
          style={{
            margin: 16,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
          }}>
          {labels.map((data, index) => {
            return (
              <View key={index} style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {data.label}{' '}
                </Text>
                <Text>: {data.value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
export default userDetails;
