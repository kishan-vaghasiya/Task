import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { COLORS } from './Src/Theme/Colors';
import { verticalScale } from './Src/utils/Scaling';
import AntDesign from'react-native-vector-icons/AntDesign'
import Images from './Src/Screen/Image/Image';
import Slider from './Src/Screen/Slider/Slider';
import ButtonSlide from './Src/Screen/BtnSlide/ButtonSlide';
import YoutubeLike from './Src/Screen/YoutubeLike/YoutubeLike';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSize = focused ? 30 : 25;
          let iconColor = focused ? COLORS.Black : 'grey';  

          if (route.name === 'Images') {
            return (
              <MaterialIcons name="photo" size={iconSize} color={iconColor} />
            );
          } else if (route.name === 'Slider') {
            return (
              <MaterialIcons name="slideshow" size={iconSize} color={iconColor} />
            );
          } else if (route.name === 'ButtonSlide') {
            return (
              <MaterialIcons name="play-arrow" size={iconSize} color={iconColor} />
            );
          } else if (route.name === 'YoutubeLike') {
            return (
              <AntDesign name="youtube" size={iconSize} color={iconColor} />
            );
          }
        },
        tabBarActiveTintColor: COLORS.Black,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          height: verticalScale(50),
          backgroundColor: COLORS.White,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name="Images"
        component={Images}
        options={{
          tabBarLabel: 'Image',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Slider"
        component={Slider}
        options={{
          tabBarLabel: 'Slider',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ButtonSlide"
        component={ButtonSlide}
        options={{
          tabBarLabel: 'Button',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="YoutubeLike"
        component={YoutubeLike}
        options={{
          tabBarLabel: 'YouTube',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}


export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BottomTab' component={BottomTab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
