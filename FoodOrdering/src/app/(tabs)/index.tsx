import { StyleSheet, Image  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import products from '../../../assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image }} style={styles.image}/>
      <Text style={styles.title}>Pizza Peperoni</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },

  image:{
    width: '100%',
    aspectRatio: 1,
  },

  title:  {
    fontSize:18,
    fontWeight: 600,
    marginVertical: 10,
    color: Colors.light.text,
  },
    price:  {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
