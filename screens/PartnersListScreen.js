// screens/PartnersListScreen.js
import React from 'react';
import { FlatList } from 'react-native';
import { Screen } from '../components/Screen';
import { SectionTitle, Card, Row } from '../components/UI';
import styles, { COLORS } from '../styles';
import { PARTNERS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function PartnersListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Card onPress={() => navigation.navigate('PartnerDetalje', { partner: item })}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
      </Row>
      <Text style={styles.cardSub}>{item.desc}</Text>
    </Card>
  );

  return (
    <Screen>
      <SectionTitle>Vores Partnere</SectionTitle>
      <FlatList
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        data={PARTNERS}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
