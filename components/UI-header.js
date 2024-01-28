import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, icons} from '../constants';
function UIHeader(props) {
  const {title, iconLeft, iconRight1, iconRight2, rightButtonTitle} = props;
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLanguages}>
          <Image style={styles.headerBack} source={iconLeft} />
        </View>
        <View style={styles.headerSearch}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.headerNotifications}>
          <Image
            style={{width: 20, height: 20, marginRight: 10}}
            source={iconRight1}
          />
          {iconRight1 === icons.bell ? (
            <Text style={styles.headerNotificationNumbers1}>10</Text>
          ) : (
            <View></View>
          )}
          <Image style={{width: 20, height: 20}} source={iconRight2} />
          {iconRight2 === icons.bag ? (
            <Text style={styles.headerNotificationNumbers2}>5</Text>
          ) : (
            <View></View>
          )}
          {rightButtonTitle ? (
            <Text style={styles.headerRightButton}>{rightButtonTitle}</Text>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <View
        style={{
          height: 1.5,
          backgroundColor: colors.opacity,
          marginTop: 10,
        }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerLanguages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 5,
    padding: 8,
  },
  headerBack: {
    width: 18,
    height: 18,
  },
  headerSearch: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
  },
  headerNotifications: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  headerNotificationNumbers1: {
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: 'red',
    fontSize: 8,
    borderRadius: 6,
    overflow: 'hidden',
    color: colors.white,
    height: 12,
    width: 12,
    padding: 1,
  },
  headerNotificationNumbers2: {
    position: 'absolute',
    top: 5,
    right: 0,
    backgroundColor: 'red',
    fontSize: 8,
    borderRadius: 5,
    overflow: 'hidden',
    color: colors.white,
    height: 12,
    width: 12,
    paddingLeft: 3,
  },
  headerRightButton: {
    position: 'absolute',
    backgroundColor: colors.primary,
    color: colors.white,
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
});
export default UIHeader;
