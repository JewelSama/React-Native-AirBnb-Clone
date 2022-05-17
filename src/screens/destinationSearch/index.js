import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState();
  return (
    <View style={[styles.container, {flex: 1}]}>
      {/* input */}
      <TextInput 
        style={styles.textInput} 
          placeholder="Where are you going?"
          value={inputText}
          onChangeText={setInputText}
          />
 
    {/* list of destinations */}
    <FlatList 
      data={searchResults}
      renderItem={({item}) => (
        <Pressable style={styles.row} onPress={()=> navigation.navigate('Guests')}>
          <View style={styles.iconContainer}> 
        <Entypo 
          name={"location-pin"} size={30}
        />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
      </Pressable>
      )}
    
    />
    </View>
  )
}

export default DestinationSearch;