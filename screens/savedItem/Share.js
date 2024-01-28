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
function Share(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share</Text>

      <View
        style={{
          marginVertical: 30,
          flexDirection: 'row',
          backgroundColor: colors.primary,
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 50,
              height: 75,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={{
              uri: 'https://gentlenobra.com/wp-content/uploads/2022/02/gai-nga-cuc-de-thuong.jpg',
            }}
          />
          <Image
            style={{
              width: 50,
              height: 75,
            }}
            source={{
              uri: 'https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-1.jpg',
            }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              color: colors.white,
              paddingLeft: 30,
              fontWeight: '300',
            }}>
            Name of board
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E6F3F7',
          borderRadius: 15,
          paddingVertical: 5,
          marginBottom: 10,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#118DF2',
            borderRadius: 50,
            tintColor: 'white',
            marginRight: 10,
            marginLeft: 20,
          }}
          source={icons.facebook}
        />
        <Text>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E6F3F7',
          borderRadius: 15,
          paddingVertical: 5,
          marginBottom: 10,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            marginLeft: 20,
          }}
          source={icons.apple}
        />
        <Text>Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E6F3F7',
          borderRadius: 15,
          paddingVertical: 5,
          marginBottom: 10,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            marginLeft: 20,
          }}
          source={icons.google}
        />
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E6F3F7',
          borderRadius: 15,
          paddingVertical: 5,
          marginBottom: 10,
        }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 10,
            marginLeft: 20,
          }}
          source={icons.copyLink}
        />
        <Text>Copy link</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
export default Share;
