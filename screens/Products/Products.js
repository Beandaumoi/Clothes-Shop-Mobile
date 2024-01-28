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
import HorizontalItem from './HorizonItem';
function Products(props) {
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

  const [advertises] = useState([
    {
      url: 'https://a-static.besthdwallpaper.com/girl-hot-black-backless-pose-wallpaper-1280x720-105162_45.jpg',
    },
    {
      url: 'https://a-static.besthdwallpaper.com/outdoor-pose-of-asian-beautiful-girl-wallpaper-1280x720-110820_45.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/10/15/02/08/girl-from-behind-1741699_1280.jpg',
    },
    {
      url: 'https://anhdepfree.com/wp-content/uploads/2022/11/hinh-nen-gai-xinh-hd_57591973901.png',
    },
    {
      url: 'https://tophinhanhdep.com/wp-content/uploads/2021/03/hinh-anh-girl-dep.jpg',
    },
    {
      url: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-gai-Nhat-xinh-dep-tren-bai-co.jpg',
    },
  ]);

  const [categories] = useState([
    {
      name: 'Giảm giá',
      icon: icons.coupon,
      color: 'rgb(237, 35, 46)',
    },
    {
      name: 'Thương hiệu',
      icon: icons.brand,
      color: 'rgb(105,209,87)',
    },
    {
      name: 'Trang điểm',
      icon: icons.cosmetics,
      color: 'rgb(109,91,202)',
    },
    {
      name: 'Nội thất',
      icon: icons.couch,
      color: 'rgb(212,155,55)',
    },
    {
      name: 'Áo tắm',
      icon: icons.bikini,
      color: 'rgb(160,89,159)',
    },
    {
      name: 'Váy',
      icon: icons.dress,
      color: 'rgb(23,118,193)',
    },
    {
      name: 'Công nghệ',
      icon: icons.technology,
      color: 'rgb(74,84,168)',
    },
    {
      name: 'Đồng hồ',
      icon: icons.watch,
      color: 'rgb(212,155,55)',
    },
    {
      name: 'Công sở',
      icon: icons.case,
      color: 'rgb(250,214,61)',
    },
  ]);
  const [collections] = useState([
    {
      url: 'https://astral.vn/wp-content/uploads/2023/05/anh-gai-xinh-lo-clip-169.jpg',
      name: 'DAY DRESSED',
      title: "Goin' with the flow",
    },
    {
      url: 'https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/anh-gai-xinh-1-12.jpg',
      name: 'Collusion',
      title: 'We see u in this',
    },
    {
      url: 'https://bloghomestay.vn/wp-content/uploads/2023/01/top-100-anh-gai-xinh-tik-tok-cute-dang-yeu-thoi-thuong-cuc-hot_1.jpg',
      name: 'New swim',
      title: 'Your moment in the sun',
    },
    {
      url: 'https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-gai-xinh-full-hd-cho-dien-thoai.jpg',
      name: 'Sunday Relay',
      title: 'Hydration huns',
    },
  ]);
  const [promotions] = useState([
    {
      url: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
    },
    {
      url: 'https://taihinhanh.vn/wp-content/uploads/2021/06/Gai-xinh-2k6-Taihinhanh-Vn-5.jpg',
    },
    {
      url: 'https://icdn.dantri.com.vn/zoom/1200_630/2021/03/27/thuytrang-2735-1616858059193.jpeg',
    },
  ]);
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;
  const col = 2;
  return (
    <View
      style={{paddingTop: 50, paddingBottom: 50, backgroundColor: colors.white}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.headerLanguages}>
          <Text style={{fontWeight: '500'}}>VI</Text>
          <Image style={{width: 20, height: 20}} source={icons.downArrow} />
        </View>
        <View style={styles.headerSearch}>
          <Image style={{width: 15, height: 15}} source={icons.search} />
          <Text style={{fontWeight: '300', marginLeft: 5}}>Search</Text>
        </View>
        <View style={styles.headerNotifications}>
          <Image
            style={{width: 20, height: 20, marginRight: 10}}
            source={icons.bell}
          />
          <Text style={styles.headerNotificationNumbers1}>10</Text>
          <Image style={{width: 20, height: 20}} source={icons.bag} />
          <Text style={styles.headerNotificationNumbers2}>5</Text>
        </View>
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: colors.opacity,
          marginTop: 20,
        }}></View>
      <ScrollView>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            data={categories}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.typeIcons}>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      resizeMode: 'cover',
                      borderRadius: 25,
                      margin: 10,
                      backgroundColor: item.color,
                    }}
                    source={item.icon}
                  />
                  <Text style={styles.typesText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}></FlatList>
        </View>

        <View style={{marginVertical: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={true}
            keyExtractor={item => item.url}
            data={advertises}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    style={{
                      height: imageHeight,
                      width: imageWidth,
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.url}}
                  />
                </View>
              );
            }}></FlatList>
        </View>

        <View>
          <Text
            style={{
              marginBottom: 20,
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 20,
            }}>
            Best seller
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.url}
            data={products}
            renderItem={({item}) => (
              <HorizontalItem
                item={item}
                onPress={() => {
                  let clonedProducts = products.map(eachProduct => {
                    if (item.title == eachProduct.title) {
                      // return {...eachProduct, isSaved: true}
                      return {
                        ...eachProduct,
                        isSaved:
                          eachProduct.isSaved == undefined ||
                          eachProduct.isSaved == false
                            ? true
                            : false,
                      };
                    }
                    return eachProduct;
                  });
                  setProducts(clonedProducts);
                }}
              />
            )}
          />
        </View>

        <View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 20,
            }}>
            New Collection
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {collections.map(collection => (
              <View
                key={collection.url}
                style={{
                  width: 100 / col + '%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 10,
                  marginTop: 20,
                }}>
                <Image
                  style={{
                    height: 200,
                    width: 150,
                    resizeMode: 'cover',
                    borderRadius: 8,
                  }}
                  source={{uri: collection.url}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {collection.name.toUpperCase()}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                  }}>
                  {collection.title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <Text
            style={{
              marginVertical: 20,
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 20,
            }}>
            Online Promotion
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={true}
            keyExtractor={item => item.url}
            data={promotions}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 20,
                  }}>
                  <Image
                    style={{
                      height: 200,
                      width: 350,
                      resizeMode: 'cover',
                      borderRadius: 8,
                    }}
                    source={{uri: item.url}}
                  />
                </View>
              );
            }}></FlatList>
        </View>

        <View style={{paddingBottom: 90}}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: 20,
                marginBottom: 20,
                marginTop: 50,
              }}>
              Recently viewed
            </Text>
            <View style={{flex: 1, marginRight: 60}}></View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginRight: 30,
                marginTop: 30,
              }}>
              <Text
                style={{
                  backgroundColor: colors.primary,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                  overflow: 'hidden',
                  color: colors.white,
                  fontWeight: '600',
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.url}
            data={products}
            renderItem={({item}) => (
              <HorizontalItem
                item={item}
                onPress={() => {
                  let clonedProducts = products.map(eachProduct => {
                    if (item.title === eachProduct.title) {
                      // return {...eachProduct, isSaved: true}
                      return {
                        ...eachProduct,
                        isSaved:
                          eachProduct.isSaved === undefined ||
                          eachProduct.isSaved === false
                            ? true
                            : false,
                      };
                    }
                    return eachProduct;
                  });
                  setProducts(clonedProducts);
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headerLanguages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.opacity,
    marginLeft: 20,
    borderRadius: 5,
    padding: 8,
  },
  headerSearch: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: colors.opacity,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    padding: 8,
  },
  headerNotifications: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
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
  typeIcons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  typesText: {
    color: colors.black,
    fontSize: 10,
  },
});
export default Products;
