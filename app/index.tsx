import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'; 
import { Text, View, ScrollView } from "react-native";

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const  Home = () => {
const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
      options={{headerStyle: { backgroundColor: COLORS.lightWhite},
      headerShadowVisible: false,
      headerTitleAlign: 'center' ,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      ),
      headerRight: () => ( 
        <ScreenHeaderBtn iconUrl={icons.profile} dimension = "100%" />
      ),
      headerTitle: "Ikshana"
      }}
    />
    </SafeAreaView>
  )
}

export default Home;
