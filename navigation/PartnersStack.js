// navigation/PartnersStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../styles';
import PartnersListScreen from '../screens/PartnersListScreen';
import PartnerDetailScreen from '../screens/PartnerDetailScreen';

const Stack = createNativeStackNavigator();

export default function PartnersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.nav },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: COLORS.appBg },
      }}
    >
      <Stack.Screen
        name="PartnerListe"
        component={PartnersListScreen}
        options={{ title: 'Partnerskaber' }}
      />
      <Stack.Screen
        name="PartnerDetalje"
        component={PartnerDetailScreen}
        options={({ route }) => ({ title: route.params?.partner?.name || 'Detaljer' })}
      />
    </Stack.Navigator>
  );
}
