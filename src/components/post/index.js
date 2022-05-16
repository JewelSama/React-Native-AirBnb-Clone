import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';


const Post = () => {
  return (
    <View style={styles.container}>
        {/* Image */}
        <Image style={styles.image}
            source={require('../../../assets/images/wallpaper.jpg')}
        />

        {/* bed & Bedroom */}
    <Text style={styles.bedrooms}>! bed 1 bedroom</Text>



        {/* Type & description */}
    <Text style={styles.description} numberOfLines={2}>
        lipsum pueriyo bla bals fun dat dsknoid
    lipsum pueriyo bla bals fun dat dsknoid
    lipsum pueriyo bla bals fun dat dsknoid lipsum pueriyo bla b
    als fun dat dsknoid</Text>


        {/* Old price & new price */}
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36</Text>
            <Text style={styles.newPrice}>  $30</Text>
            / night
        </Text>
    
        {/* Total Price */}
        <Text style={styles.totalPrice}>$230 total</Text> 
    </View>
  )
}

export default Post;