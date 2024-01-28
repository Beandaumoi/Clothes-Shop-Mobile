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
  Pressable,
} from 'react-native';
import {colors, icons} from '../../constants';
import {UIHeader} from '../../components';
function EachAllItems(props) {
  const {item} = props;
  return (
    <View>
    <View style={{
        flexDirection: 'row',
        marginVertical: 20
      }}>
        <Image style={{
          width: 108,
          height: 108,
          borderRadius: 8
        }} source={{uri: item.url}} />
        <View style={{
          marginLeft: 20,
        }}>
          <Text style={{
            fontSize: 18,
          }}>{item.title}</Text>
          <Text style={{
            color: colors.black,
            fontWeight: 'bold',
            fontSize: 20
          }}>{item.price}$</Text>
          <TouchableOpacity style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <Text style={{
              color: colors.primary,
              fontWeight: '500',
              borderWidth: 1,
              borderColor: colors.primary,
              paddingHorizontal: 20,
              paddingVertical: 11,
              borderRadius: 6,
          }}>Add to cart</Text>

          </TouchableOpacity>
        </View>
      </View>
        <View style={{
          height: 1,
          backgroundColor: colors.opacity,
        }}></View>
      </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 12,
    borderColor: 'rgb(236,244,247)',
  },
  listImage: {
    width: 135,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listDescription: {
    marginTop: 6,
  },
  listTitleBackground: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
  },
});
export default EachAllItems;
