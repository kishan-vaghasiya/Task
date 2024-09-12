import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from './Src/Theme/Colors';
import {verticalScale} from './Src/utils/Scaling';
import Images from './Src/Screen/Image/Image';
import Slider from './Src/Screen/Slider/Slider';
import ButtonSlide from './Src/Screen/BtnSlide/ButtonSlide';
import YoutubeLike from './Src/Screen/YoutubeLike/YoutubeLike';
import Register from './Src/Screen/Register/Register';
import Home from './Src/Screen/Home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSize = focused ? 30 : 25;
          let iconColor = focused ? COLORS.Black : 'grey';

          if (route.name === 'Home') {
            return (
              <MaterialIcons name="home" size={iconSize} color={iconColor} />
            );
          } else if (route.name === 'Images') {
            return (
              <MaterialIcons name="image" size={iconSize} color={iconColor} />
            );
          } else if (route.name === 'Slider') {
            return (
              <MaterialIcons
                name="slideshow"
                size={iconSize}
                color={iconColor}
              />
            );
          } else if (route.name === 'ButtonSlide') {
            return (
              <MaterialIcons
                name="play-arrow"
                size={iconSize}
                color={iconColor}
              />
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
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home', headerShown: false}}
      />
      <Tab.Screen
        name="Images"
        component={Images}
        options={{tabBarLabel: 'Image', headerShown: false}}
      />
      <Tab.Screen
        name="Slider"
        component={Slider}
        options={{tabBarLabel: 'Slider', headerShown: false}}
      />
      <Tab.Screen
        name="ButtonSlide"
        component={ButtonSlide}
        options={{tabBarLabel: 'Button', headerShown: false}}
      />
      <Tab.Screen
        name="YoutubeLike"
        component={YoutubeLike}
        options={{tabBarLabel: 'YouTube', headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.White,
              elevation: 4, // For Android shadow
              shadowColor: '#000', // For iOS shadow
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
            headerTintColor: COLORS.Black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
