import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../constant';

const User = () => {
  const [Name, setName] = useState(null);
  const [Gender, setGender] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Location, setLocation] = useState(null);

  const renderHeader = () => (
    <View
      style={{
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
      }}>
      <Text>User</Text>
    </View>
  );

  const renderForm = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: 12}}>
          <Text>Name</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 8,
              padding: 10,
              borderRadius: 10,
            }}
            onChangeText={text => {
              setName(...Name, text);
            }}
            value={Name}
            placeholder="Name"
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text>Gender</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 8,
              padding: 10,
              borderRadius: 10,
            }}
            onChangeText={text => {
              setName(...Gender, text);
            }}
            value={Gender}
            placeholder="Gender"
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text>Phone</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 8,
              padding: 10,
              borderRadius: 10,
            }}
            onChangeText={text => {
              setName(...Phone, text);
            }}
            value={Phone}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text>Location</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginTop: 8,
              padding: 10,
              borderRadius: 10,
            }}
            onChangeText={text => {
              setName(...Location, text);
            }}
            value={Location}
            placeholder="Location"
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 16,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.transparentPrimray,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              handleReset();
            }}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              handleSave();
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleReset = () => {
    setName(null);
    setGender(null);
    setPhone(null);
    setLocation(null);
  };

  const handleRequestData = () => {
    return {
      Name,
      Gender,
      Phone,
      Location,
    };
  };

  const handleSave = () => {
    const requestData = handleRequestData();
    console.log(`requestData`, requestData);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 22,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
      {renderForm()}
    </View>
  );
};

export default User;
