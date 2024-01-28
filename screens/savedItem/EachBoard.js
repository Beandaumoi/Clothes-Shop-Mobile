import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../constants';
function EachBoard(props) {
  const {item, onPress} = props;
  return (
    <View>
      <View style={styles.images}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={styles.borderLeft}
            source={{
              uri: item.main,
            }}
          />
          <View>
            <Image
              style={styles.borderRight}
              source={{
                uri: item.second,
              }}
            />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image
                style={{marginRight: 4, width: 98, height: 98}}
                source={{
                  uri: item.third,
                }}
              />
              <Image
                style={{width: 98, height: 98}}
                source={{
                  uri: item.fourth,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.border}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.title}</Text>
            <Text style={{fontWeight: '300'}}>{item.number}</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Image style={{width: 20, height: 20}} source={icons.send} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  images: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  borderLeft: {
    width: 131,
    height: 208,
    borderTopLeftRadius: 13,
  },
  borderRight: {
    width: 200,
    height: 105,
    borderTopRightRadius: 13,
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 5,
    alignItems: 'center',
    borderColor: '#E6F3F7',
    borderWidth: 1,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
});
export default EachBoard;
