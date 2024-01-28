import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, icons, images} from '../../constants';
import {UIHeader} from '../../components';
import EachCart from './EachCart';
function Cart(props) {
  const [carts] = useState([
    {
      url: 'https://media1.nguoiduatin.vn/m24/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg?v=1689466382',
      name: 'Váy liền',
      size: 'M',
      color: 'White',
      price: 300,
    },
    {
      url: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/4/photo-17-16097629104061220867529.jpg',
      name: 'Váy dạ hội',
      size: 'M',
      color: 'Black',
      price: 500,
    },
    {
      url: 'https://toquoc.mediacdn.vn/280518851207290880/2021/8/16/photo-1-1629111708190399299212-1629127922560-16291279227821192658240.jpg',
      name: 'Áo khoác',
      size: 'L',
      color: 'White',
      price: 400,
    },
    {
      url: 'https://i.pinimg.com/736x/bc/05/82/bc05829256dfb8575087fba5af46cf91.jpg',
      name: 'Váy ngắn',
      size: 'M',
      color: 'Gray',
      price: 350,
    },
    {
      url: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2022/03/13/hoi-gai-xinh-goi-cam-noi-gi-truoc-ap-luc-mac-sexy-la-hu-hongdocx-1647188021768.jpeg',
      name: 'Váy sườn xám',
      size: 'M',
      color: 'Gray',
      price: 355,
    },
    {
      url: 'https://cdn.eva.vn/upload/1-2021/images/2021-01-30/dien-do-nen-na-hot-girl-van-khong-the-giau-noi-vong-1-khung-img_6777-1612001584-918-width1125height1472.jpg',
      name: 'Váy tạp dề',
      size: 'M',
      color: 'Pink',
      price: 300,
    },
    {
      url: 'https://timanhdep.com/wp-content/uploads/2022/06/hinh-anh-gai-xinh-mac-vay-ngan-cute-de-thuong-nhat-01.jpg',
      name: 'Áo khoác mỏng',
      size: 'M',
      color: 'Aqua',
      price: 199,
    },
    {
      url: 'https://www.ldg.com.vn/media/uploads/uploads/27223646-anh-zai.jpg',
      name: 'Váy liền',
      size: 'M',
      color: 'White',
      price: 350,
    },
  ]);
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
      <UIHeader
        title={'Your Cart'}
        iconRight2={icons.bell}
        iconLeft={icons.back}
      />
      <ScrollView style={{marginTop: 20, flex: 1}}>
        {carts.map(cart => {
          return <EachCart item={cart} />;
        })}
        <View style={{paddingBottom: 55}}>
          <View style={styles.row}>
            <Text style={styles.ship}>Shipping price</Text>
            <Text style={styles.ship}>40.55$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.total}>Total Price</Text>
            <Text style={styles.total}>2754$</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate('Success');
            }}
            style={styles.payBackground}>
            <Text style={styles.pay}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Home');
            }}
            style={styles.continueBackground}>
            <Image style={styles.icon} source={icons.downArrow} />
            <Text style={styles.continue}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    //paddingBottom: 55,
    backgroundColor: colors.white,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  ship: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.inactive,
  },
  total: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 15,
  },
  payBackground: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    width: '80%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 35,
  },
  pay: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueBackground: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  icon: {
    width: 20,
    height: 18,
    transform: [{rotate: '90deg'}],
    tintColor: colors.primary,
  },
  continue: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
export default Cart;
