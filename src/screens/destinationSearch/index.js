import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';


const DestinationSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {flex: 1}]}>
      {/* input */}

      <GooglePlacesAutocomplete
        placeholder='Where are you going'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput
        }}
        query={{
          key: 'AIzaSyDDiub-TfI0017WWXlxHPt3DSDJBnxy74g',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
    />
  </View>

      
  )
}

export default DestinationSearch;