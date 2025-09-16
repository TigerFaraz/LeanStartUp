// components/UI.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles, { COLORS } from '../styles';

export const SectionTitle = ({ children, style }) => (
  <Text style={[styles.sectionTitle, style]}>{children}</Text>
);

export const Card = ({ onPress, children, style }) => (
  <TouchableOpacity
    activeOpacity={onPress ? 0.8 : 1}
    onPress={onPress}
    style={[styles.card, style]}
  >
    {children}
  </TouchableOpacity>
);

export const Row = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

export const Chip = ({ label, active, onPress, icon }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.chip, active ? styles.chipActive : null]}
    activeOpacity={0.85}
  >
    {icon ? <View style={{ marginRight: 6 }}>{icon}</View> : null}
    <Text
      style={[styles.chipText, active ? styles.chipTextActive : null]}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export const Input = (props) => (
  <TextInput placeholderTextColor={COLORS.muted} {...props} style={[styles.input, props.style]} />
);
