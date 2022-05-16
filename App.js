import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/Home'
import Post from './src/components/post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/searchResults';

export default function App() {
    const post2 = feed[2];
  return (
    <SafeAreaView>
      {/* <Post post={post2}/> */}
      <SearchResultScreen />
    </SafeAreaView>
  )
}

