// navigation/RootNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../styles';

import SellScreen from '../screens/SellScreen';
import BuyScreen from '../screens/BuyScreen';
import PartnersStack from './PartnersStack';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: COLORS.nav },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: COLORS.nav },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: '#9aa0a6',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Sælg') return <Ionicons name="pricetag-outline" size={size} color={color} />;
          if (route.name === 'Køb') return <Ionicons name="cart-outline" size={size} color={color} />;
          if (route.name === 'Partnerskaber') return <FontAwesome5 name="handshake" size={size} color={color} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="Sælg" component={SellScreen} />
      <Tab.Screen name="Køb" component={BuyScreen} />
      <Tab.Screen name="Partnerskaber" component={PartnersStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
