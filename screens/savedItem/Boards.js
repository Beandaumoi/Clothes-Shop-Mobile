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
import EachBoard from './EachBoard';
function Boards(props) {
  const [products, setProducts] = useState([
    {
      main: 'https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-cute-1.jpg',
      second:
        'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
      third:
        'https://hinhgaixinh.com/wp-content/uploads/2022/03/anh-gai-xinh-hoc-sinh-tuyet-dep.jpg',
      fourth:
        'https://file.vfo.vn/hinh/2018/12/hinh-anh-girl-xinh-dep-nhat-quyen-ru-36.png',
      title: 'Áo phông trắng',
      number: 120,
    },
    {
      main: 'https://hinhgaixinh.com/wp-content/uploads/2022/04/anh-gai-nga-tuyet-dep.jpg',
      second:
        'https://hinhgaixinh.com/wp-content/uploads/2022/04/anh-gai-nga.jpg',
      third:
        'https://kenh14cdn.com/2018/6/8/228022321258031647554351442918048620085248n-1528465147904951285363.jpg',
      fourth:
        'https://luv.vn/wp-content/uploads/2022/07/Hinh-anh-gai-Nga-dep-luvvn-2.jpg',
      title: 'Áo phông trắng',
      number: 120,
    },
    {
      main: 'https://i.vietgiaitri.com/2019/8/23/hot-girl-the-hinh-duoc-binh-chon-co-nang-dep-nhat-nuoc-nga-4c9dc0.jpg',
      second:
        'https://i.vietgiaitri.com/2018/12/30/hot-girl-nga-co-hon-mot-trieu-fan-tren-mang-vi-xinh-nhu-bup-be-37a3d9.jpg',
      third:
        'https://www.ldg.com.vn/media/uploads/uploads/21204723-hinh-anh-gai-xinh-2.jpg',
      fourth:
        'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-gai-xinh-viet-nam-dep-nhat.jpg',
      title: 'Áo phông trắng',
      number: 120,
    },
    {
      main: 'https://danviet.mediacdn.vn/upload/1-2019/images/2019-01-13/angelina-danilova7-1547390098-width650height650.jpg',
      second:
        'https://vienthammydiva.vn/wp-content/uploads/2022/05/gai-xinh-trung-quoc-6-1.jpg',
      third:
        'https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/72dfdaec4b79338b7312a74d88aa499a.jpg',
      fourth:
        'https://hinhgaixinh.com/wp-content/uploads/2022/04/co-em-nga-xinh-dep.jpg',
      title: 'Áo phông trắng',
      number: 120,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.main}
        renderItem={({item}) => {
          return (
            <EachBoard
              onPress={() => alert ('Share')}
              item={item}
            />
          );
        }}
      />
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
export default Boards;
