import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors} from '../../constants';
import EachItem from './EachItem';
function Women(props) {
  const [categories, setCategories] = useState([
    {
      url: 'https://vcdn1-giaitri.vnecdn.net/2022/12/29/sao123-7287-1672290667-1672332-4147-3840-1672332450.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=57bQ14cl8VaA9kycxumXNA',
      title: 'sale',
      description: 'Up to 80% Off',
    },
    {
      url: 'https://kenh14cdn.com/thumb_w/660/2018/7/16/1-15317155289701598625253.jpg',
      title: 'new in',
      description: '',
    },
    {
      url: 'https://danviet.mediacdn.vn/upload/1-2019/images/2019-01-13/memeless7-1547388173-width650height654.jpg',
      title: 'topshop',
      description: '',
    },
    {
      url: 'https://image-us.24h.com.vn/upload/3-2022/images/2022-08-05/1659677471-977-thumbnail-width740height555.jpg',
      title: 'clothing',
      description: '',
    },
    {
      url: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-chau-Au-My.jpg',
      title: 'shoes',
      description: '',
    },
    {
      url: 'https://afamilycdn.com/2018/2/19/photo-3-1519006459342549394717.jpg',
      title: 'accessories',
      description: '',
    },
    {
      url: 'https://hinhgaixinh.com/wp-content/uploads/2022/04/anh-gai-nga.jpg',
      title: 'trending now',
      description: '',
    },
  ]);
  return (
    <View style={styles.container}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.url}
            renderItem={({item}) => {
              return (
                <EachItem
                  item={item}
                  onPress={() => {
                    setCategories(
                      categories.map(category => {
                        return category.title === item.title
                          ? {...category, isSelected: true}
                          : {...category, isSelected: false};
                      }),
                    );
                  }}
                  isSelected={item.isSelected}
                />
              );
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});
export default Women;
