import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, dummyData} from '../constant';

const Dashboard = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 12,
          backgroundColor: COLORS.orange,
          paddingVertical: 16,
          borderRadius: 10,
          paddingLeft: 6,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{marginRight: 8, fontSize: 16, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text>| {` ${item.gender}`}</Text>
        </View>
        <View>
          <Text>phone : {item.phone}</Text>
          <Text>location : {item.location}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 22,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: COLORS.primary,
                alignItems: 'space-between',
                paddingVertical: 10,
                marginBottom: 8,
                fontSize: 18,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}>
              <Text>User List</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('User');
                }}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dashboard;
