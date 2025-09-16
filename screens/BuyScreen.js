// screens/BuyScreen.js
import React, { useMemo, useState } from 'react';
import { View, Text, Modal, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles';
import { PARTNERS, CATEGORIES } from '../constants';
import { useTickets } from '../context/TicketsContext';
import { Screen } from '../components/Screen';
import { SectionTitle, Row, Chip, Input, Card } from '../components/UI';

export default function BuyScreen({ route }) {
  const { tickets } = useTickets();
  const presetPartner = route?.params?.partner || '';

  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [partner, setPartner] = useState(presetPartner);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('Relevans');

  const resetFilters = () => {
    setPartner(presetPartner || '');
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
    setSort('Relevans');
  };

  const filtered = useMemo(() => {
    let arr = tickets.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.partner.toLowerCase().includes(q) ||
          (t.city || '').toLowerCase().includes(q)
      );
    }
    if (partner.trim()) arr = arr.filter((t) => t.partner.toLowerCase() === partner.toLowerCase());
    if (category.trim()) arr = arr.filter((t) => t.category === category);

    const min = Number(minPrice);
    const max = Number(maxPrice);
    if (minPrice !== '' && !Number.isNaN(min)) arr = arr.filter((t) => t.price >= min);
    if (maxPrice !== '' && !Number.isNaN(max)) arr = arr.filter((t) => t.price <= max);

    if (sort === 'Pris (lav→høj)') arr.sort((a, b) => a.price - b.price);
    if (sort === 'Pris (høj→lav)') arr.sort((a, b) => b.price - a.price);

    return arr;
  }, [tickets, query, partner, category, minPrice, maxPrice, sort]);

  const TicketRow = ({ item }) => (
    <Card style={styles.ticketCard}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text style={styles.ticketTitle}>{item.title}</Text>
        <Text style={styles.ticketPrice}>{item.price} kr</Text>
      </Row>
      <Row style={{ marginTop: 6, flexWrap: 'wrap' }}>
        <Chip label={item.partner} />
        <Chip label={item.category} />
        <Chip label={`Qty: ${item.qty}`} />
        {item.city ? <Chip label={item.city} /> : null}
      </Row>
    </Card>
  );

  return (
    <Screen>
      <View style={styles.headerSearchRow}>
        <Input
          placeholder="🔍 Søg efter billet, partner eller by..."
          value={query}
          onChangeText={setQuery}
          style={{ flex: 1, marginRight: 10 }}
        />
        <TouchableOpacity style={styles.iconButton} onPress={() => setFiltersOpen(true)}>
          <MaterialIcons name="tune" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <Row style={{ paddingHorizontal: 16 }}>
        {!!partner && (
          <Chip
            label={`Partner: ${partner}`}
            active
            onPress={() => setPartner('')}
            icon={<MaterialIcons name="close" size={16} color={COLORS.chipActiveText} />}
          />
        )}
        {!!category && (
          <Chip
            label={`Kategori: ${category}`}
            active
            onPress={() => setCategory('')}
            icon={<MaterialIcons name="close" size={16} color={COLORS.chipActiveText} />}
          />
        )}
      </Row>

      <FlatList
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={TicketRow}
        ListEmptyComponent={<Text style={styles.emptyText}>Ingen billetter matcher dine kriterier.</Text>}
      />

      {/* Filtre modal */}
      <Modal visible={filtersOpen} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <SectionTitle>Filtre</SectionTitle>

            <Text style={styles.label}>Partner</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
              <Chip label="Alle" active={!partner} onPress={() => setPartner('')} />
              {PARTNERS.map((p) => (
                <Chip key={p.id} label={p.name} active={partner === p.name} onPress={() => setPartner(p.name)} />
              ))}
            </ScrollView>

            <Text style={styles.label}>Kategori</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
              <Chip label="Alle" active={!category} onPress={() => setCategory('')} />
              {CATEGORIES.map((c) => (
                <Chip key={c} label={c} active={category === c} onPress={() => setCategory(c)} />
              ))}
            </ScrollView>

            <Row>
              <Input
                placeholder="Min pris"
                value={minPrice}
                onChangeText={(v) => setMinPrice(v.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                style={{ flex: 1, marginRight: 8 }}
              />
              <Input
                placeholder="Max pris"
                value={maxPrice}
                onChangeText={(v) => setMaxPrice(v.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                style={{ flex: 1, marginLeft: 8 }}
              />
            </Row>

            <Text style={styles.label}>Sortering</Text>
            <Row style={{ flexWrap: 'wrap' }}>
              {['Relevans', 'Pris (lav→høj)', 'Pris (høj→lav)'].map((s) => (
                <Chip key={s} label={s} active={sort === s} onPress={() => setSort(s)} />
              ))}
            </Row>

            <Row style={{ marginTop: 16 }}>
              <TouchableOpacity style={[styles.secondaryButton, { flex: 1, marginRight: 8 }]} onPress={resetFilters}>
                <Text style={styles.secondaryButtonText}>Nulstil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.primaryButton, { flex: 1, marginLeft: 8 }]} onPress={() => setFiltersOpen(false)}>
                <Text style={styles.primaryButtonText}>Anvend</Text>
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
