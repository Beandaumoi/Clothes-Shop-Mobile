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
function EachCart(props) {
  const {item} = props;
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.title}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.item}>
          <Text style={styles.titleName}>Size: </Text>
          <Text style={styles.size}>
            {item.size} - {item.color}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleName}>Quantity: </Text>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={handleDecrement}>
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.price}>{item.price}$</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },
  titleName: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '300',
  },
  size: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  quantity: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  btn: {
    fontSize: 14,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: colors.primary,
  },
  price: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 20,
  },
});
export default EachCart;
