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
import {UIHeader} from '../../components';
import EachAllItems from './EachAllItem';
function AllItems(props) {
  const [products, setProducts] = useState([
    {
      url: 'https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-cute-1.jpg',
      title: 'Áo phông trắng',
      price: 120,
    },
    {
      url: 'https://kenh14cdn.com/thumb_w/660/2020/3/4/8812123225187506817080637635029543803158528o-15832917397941593972380.jpg',
      title: 'Áo dài Việt Nam',
      price: 100,
    },
    {
      url: 'https://vn-test-11.slatic.net/p/0994964c2b9bace77ea4482eb60494cd.jpg',
      title: 'Váy bó',
      price: 120,
    },
    {
      url: 'https://media1.nguoiduatin.vn/media/hoang-thi-bich/2018/12/11/hot-girl-du-doan-ti-so-tran-vn-malaysia-3.jpg',
      title: 'Quần áo thể thao',
      price: 120,
    },
    {
      url: 'https://hazomi.com/wp-content/uploads/2022/08/e5df493ce16ad0b7a131a1c3b7454311.jpg',
      title: 'Váy đen',
      price: 120,
    },
    {
      url: 'https://alltop.vn/backend/media/images/posts/1/RACH_store-4309.jpg',
      title: 'Váy ngắn trẻ trung',
      price: 120,
    },
    {
      url: 'https://www.lamdieu.com/wp-content/uploads/2021/03/trang-phuc-sexy.jpg',
      title: 'Set quyến rũ',
      price: 120,
    },
    {
      url: 'https://cdn.24h.com.vn/upload/1-2022/images/2022-01-20/Dien-271766496_233130049010415_2279070663158652070_n-1642665138-38-width700height875.jpg',
      title: 'Váy sườn xám',
      price: 120,
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.url}
          renderItem={({item}) => {
            return <EachAllItems item={item} />;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
});
export default AllItems;
