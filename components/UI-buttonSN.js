import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../constants';
function UIButtonSN(props) {
  const {icon, title, backgroundColor, color, backgroundIconColor} = props;
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: backgroundColor,
          padding: 18,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            backgroundColor: backgroundIconColor,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: backgroundColor,
            tintColor: color,
            marginHorizontal: 15,
          }}
          source={icon}
        />
        <Text
          style={{
            color: colors.white,
            fontWeight: 'bold',
            fontSize: 16,
            width: 200,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default UIButtonSN;
