import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {colors, icons} from '../../constants';
import {UIHeader} from '../../components';
function EachItem(props) {
  const {item, onPress, isSelected} = props;
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[
          styles.listContainer,
          {backgroundColor: isSelected === true ? colors.primary : null},
        ]}>
        <Image style={styles.listImage} source={{uri: item.url}} />
        <View style={styles.listTitleBackground}>
          <Text
            style={[
              styles.listTitle,
              {color: isSelected === true ? colors.white : colors.black},
            ]}>
            {item.title.toUpperCase()}
          </Text>
          <Text
            style={[
              styles.listDescription,
              {color: isSelected === true ? colors.white : colors.inactive},
            ]}>
            {item.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 20,
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
export default EachItem;
