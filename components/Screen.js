// components/Screen.js
import React from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles, { GRADIENTS } from '../styles';

export const Screen = ({ children }) => (
  <View style={styles.screen}>
    <LinearGradient colors={GRADIENTS.app} style={StyleSheet.absoluteFill} />
    {children}
  </View>
);

export const ScreenKA = ({ children }) => (
  <KeyboardAvoidingView
    style={styles.screen}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <LinearGradient colors={GRADIENTS.app} style={StyleSheet.absoluteFill} />
    {children}
  </KeyboardAvoidingView>
);
