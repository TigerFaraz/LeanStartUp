// screens/SellScreen.js
import React, { useState } from 'react';
import { View, Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles';
import { CATEGORIES } from '../constants';
import { useTickets } from '../context/TicketsContext';
import { ScreenKA } from '../components/Screen';
import { SectionTitle, Row, Chip, Input } from '../components/UI';

export default function SellScreen() {
  const { addTicket } = useTickets();
  const [form, setForm] = useState({
    title: '',
    partner: '',
    category: '',
    price: '',
    qty: '',
    city: '',
    note: '',
  });
  const handleChange = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const canSubmit =
    form.title.trim() &&
    form.partner.trim() &&
    form.category.trim() &&
    Number(form.price) > 0 &&
    Number(form.qty) > 0;

  const onSubmit = () => {
    if (!canSubmit) {
      Alert.alert('Manglende felter', 'Udfyld venligst titel, partner, kategori, pris og antal.');
      return;
    }
    addTicket({
      title: form.title.trim(),
      partner: form.partner.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      qty: Number(form.qty),
      city: form.city.trim() || 'København',
      note: form.note.trim(),
    });
    Alert.alert('Opslået ✅', 'Din billet er sat til salg.');
    setForm({ title: '', partner: '', category: '', price: '', qty: '', city: '', note: '' });
  };

  return (
    <ScreenKA>
      <ScrollView contentContainerStyle={styles.scrollPad}>
        <SectionTitle>Sælg din billet</SectionTitle>

        <Input placeholder="🎤 Event / titel" value={form.title} onChangeText={(v) => handleChange('title', v)} />
        <Input placeholder="🏢 Partner (fx Tivoli, Royal Arena)" value={form.partner} onChangeText={(v) => handleChange('partner', v)} />

        <View>
          <Text style={styles.label}>Kategori</Text>
          <Row style={{ flexWrap: 'wrap' }}>
            {CATEGORIES.map((c) => (
              <Chip
                key={c}
                label={c}
                active={form.category === c}
                onPress={() => handleChange('category', c)}
                icon={form.category === c ? <MaterialIcons name="check" size={16} color={COLORS.chipActiveText} /> : null}
              />
            ))}
          </Row>
        </View>

        <Row>
          <Input
            placeholder="💰 Pris (DKK)"
            value={form.price}
            onChangeText={(v) => handleChange('price', v.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={{ flex: 1, marginRight: 8 }}
          />
          <Input
            placeholder="🔢 Antal"
            value={form.qty}
            onChangeText={(v) => handleChange('qty', v.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            style={{ flex: 1, marginLeft: 8 }}
          />
        </Row>

        <Input placeholder="📍 By (valgfri)" value={form.city} onChangeText={(v) => handleChange('city', v)} />
        <Input
          placeholder="📝 Note (valgfri)"
          value={form.note}
          onChangeText={(v) => handleChange('note', v)}
          multiline
          style={{ minHeight: 96, textAlignVertical: 'top' }}
        />

        <View style={{ paddingHorizontal: 16 }}>
          <TouchableOpacity
            style={[styles.primaryButton, !canSubmit && { opacity: 0.5 }]}
            onPress={onSubmit}
            disabled={!canSubmit}
          >
            <Text style={styles.primaryButtonText}>Sæt til salg</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenKA>
  );
}
