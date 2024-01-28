import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {colors, icons} from '../../constants';

function HorizontalItem(props) {
  const {item, onPress} = props;
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Image
          style={{
            height: 200,
            width: 120,
            resizeMode: 'cover',
            borderRadius: 8,
          }}
          source={{uri: item.url}}
        />
        <Text
          style={{
            marginTop: 8,
            fontSize: 12,
          }}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {item.price}$
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            {item.isSaved == undefined || item.isSaved == false ? (
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={icons.heart}
              />
            ) : (
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'red',
                }}
                source={icons.hearActive}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default HorizontalItem;
