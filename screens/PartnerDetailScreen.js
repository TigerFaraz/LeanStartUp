// screens/PartnerDetailScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { CATEGORIES } from '../constants';
import { Screen } from '../components/Screen';
import { Card, Row, Chip } from '../components/UI';

export default function PartnerDetailScreen({ route, navigation }) {
  const partner = route.params?.partner;
  if (!partner) return null;

  return (
    <Screen>
      <Card style={{ margin: 16 }}>
        <Text style={styles.detailTitle}>{partner.name}</Text>
        <Text style={styles.detailText}>{partner.desc}</Text>
      </Card>

      <Card style={{ marginHorizontal: 16 }}>
        <Text style={styles.cardTitle}>Populære kategorier</Text>
        <Row style={{ marginTop: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.slice(0, 4).map((c) => (
            <Chip key={c} label={c} />
          ))}
        </Row>
      </Card>

      {/* ⬇️ Placer knapperne HER */}
      <Row style={{ margin: 16 }}>
        <TouchableOpacity
          style={[styles.primaryButton, { flex: 1, marginRight: 8 }]}
          onPress={() => navigation.navigate('Køb', { partner: partner.name })}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Se billetter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryButton, { flex: 1, marginLeft: 8 }]}
          activeOpacity={0.85}
        >
          <Text style={styles.secondaryButtonText}>Følg partner</Text>
        </TouchableOpacity>
      </Row>
      {/* ⬆️ Slut på knapper */}
    </Screen>
  );
}
