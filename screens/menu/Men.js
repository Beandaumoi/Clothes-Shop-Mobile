import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../constants';
import EachItem from './EachItem';
function Men(props) {
  const [categories, setCategories] = useState([
    {
      url: 'https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/07/cach-chup-anh-chan-dung-nam-1.jpeg',
      title: 'sale',
      description: 'Up to 80% Off',
    },
    {
      url: 'https://aoxuanhe.com/upload/product/axh-159/ao-thun-cotton-co-tron-ke-soc.jpg',
      title: 'new in',
      description: '',
    },
    {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/2-1.jpg',
      title: 'topshop',
      description: '',
    },
    {
      url: 'https://giadinh.mediacdn.vn/296230595582509056/2023/4/17/g-gay-ngo-ngang-cua-sieu-mau-binh-minh-o-tuoi-42-33788430714448980062583438209009593984018131n-1680487581-242-width900height1350-1681722423578-16817224238291520729828.jpg',
      title: 'clothing',
      description: '',
    },
    {
      url: 'https://thoitrangbigsize.vn/wp-content/uploads/2021/05/BS1809-1.jpg',
      title: 'shoes',
      description: '',
    },
    {
      url: 'https://thoitrangbigsize.vn/wp-content/uploads/2021/05/BS1810.jpg',
      title: 'accessories',
      description: '',
    },
    {
      url: 'https://bigsize.navy.vn/wp-content/uploads/2021/06/BS1812-400x400.jpg',
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
export default Men;
