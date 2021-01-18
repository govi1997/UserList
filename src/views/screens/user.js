import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [],
    };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        console.log({json});
        this.setState({
          userlist: json,
        });
      });
  };

  showDetails = (details) => {
    this.props.navigation.navigate('userDetails',{
      Details:details
    })
  };

  listUser(item, index) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.showDetails(item);
        }}>
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              <Image
                source={{
                  uri:
                    'https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg',
                }}
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 12,
                  }}>
                  {item.username}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
          User List
        </Text>
        <FlatList
          data={this.state.userlist}
          ListHeaderComponent={<View style={{width: '100%'}} />}
          ListFooterComponent={<View style={{width: '100%', height: 28}} />}
          renderItem={
            ({item, index}) => this.listUser(item, index)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserList;
