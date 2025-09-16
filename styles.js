// styles.js
import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  // Brand / Neon dark
  nav: '#0b1020',            // dyb navy til top/bund
  navBorder: 'rgba(255,255,255,0.06)',
  accent: '#22d3ee',         // cyan glow
  accent2: '#8b5cf6',        // violet sekundær
  tabInactive: '#9aa0a6',

  // Base (dark space)
  appBg: '#0a0d1a',          // fallback hvis ikke gradient bruges
  cardBg: '#0f172a',         // mørk blågrå
  text: '#e6eaf2',
  muted: '#93a0b8',
  border: 'rgba(255,255,255,0.08)',

  // Components
  chipBg: 'rgba(255,255,255,0.06)',
  chipActiveBg: 'rgba(34,211,238,0.18)',  // cyan wash
  chipActiveText: '#a5f3fc',

  // Status
  success: '#34d399',
  danger: '#ef4444',
  warning: '#f59e0b',
};

// Brug disse til LinearGradient (expo-linear-gradient)
export const GRADIENTS = {
  app: ['#0a0d1a', '#0b1226', '#0f1b3a'],              // baggrundsgradient
  primary: ['#22d3ee', '#8b5cf6'],                      // cyan -> violet
  card: ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)'], // diskret lysning
};

const SPACING = 16;
const RADIUS = 14;

const softShadow = {
  shadowColor: '#000',
  shadowOpacity: 0.25,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 10 },
  elevation: 10,
};

// neon glow (brug sparsommelig)
const glowAccent = {
  shadowColor: COLORS.accent,
  shadowOpacity: 0.45,
  shadowRadius: 18,
  shadowOffset: { width: 0, height: 6 },
  elevation: 12,
};

export default StyleSheet.create({
  /* Layout & typografi */
  screen: {
    flex: 1,
    backgroundColor: COLORS.appBg, // bliver “overskrevet” visuelt af gradient
  },
  scrollPad: {
    padding: SPACING,
    paddingBottom: SPACING * 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING,
    paddingHorizontal: SPACING,
    letterSpacing: 0.2,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.muted,
    marginBottom: 6,
    marginTop: 8,
    paddingHorizontal: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  /* Inputs */
  input: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 12,
  },

  /* Rows */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* Card */
  card: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: RADIUS,
    padding: SPACING,
    marginBottom: 12,
    alignSelf: 'stretch',
    marginHorizontal: SPACING,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...softShadow,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
  },
  cardSub: {
    marginTop: 6,
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 20,
  },

  /* Tickets */
  ticketCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: RADIUS,
    padding: SPACING,
    marginBottom: 12,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: COLORS.border,
    ...softShadow,
  },
  ticketTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.text,
  },
  ticketPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.accent,
    textShadowColor: 'rgba(34,211,238,0.35)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 24,
    fontSize: 14,
  },

  /* Chips */
  chip: {
    backgroundColor: COLORS.chipBg,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: COLORS.chipActiveBg,
    borderColor: COLORS.accent,
    ...glowAccent,
  },
  chipText: {
    fontSize: 13,
    color: '#c9d4e6',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
  chipTextActive: {
    color: COLORS.chipActiveText,
  },

  /* Søgefelt + filterknap */
  headerSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING,
    paddingTop: SPACING,
    paddingBottom: 8,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(34,211,238,0.5)',
    ...softShadow,
  },

  /* Knapper */
  primaryButton: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'rgba(34,211,238,0.6)',
    ...glowAccent,
  },
  primaryButtonText: {
    color: '#06121e',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 16,
  },

  /* Partner detaljer */
  detailTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  detailText: {
    fontSize: 16,
    color: '#c4ccda',
    lineHeight: 22,
  },

  /* Modal / bottom sheet til filtre */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: 'rgba(15,23,42,0.96)',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: SPACING,
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: COLORS.border,
    ...softShadow,
  },
});
