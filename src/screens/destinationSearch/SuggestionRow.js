import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => {
    return(
        <View style={styles.row} >
        <View style={styles.iconContainer}> 
      <Entypo 
        name={"location-pin"} size={30}
      />
      </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
 
  
    )
}

export default SuggestionRow;