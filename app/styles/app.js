import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-title': {
    'marginTop': [{ 'unit': 'rem', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'clock': {
    'alignItems': 'center',
    'backgroundColor': '#B5D0E2',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2099E8' }],
    'borderRadius': '50%',
    'display': 'flex',
    'height': [{ 'unit': 'rem', 'value': 14 }],
    'justifyContent': 'center',
    'margin': [{ 'unit': 'rem', 'value': 4 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 4 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'rem', 'value': 14 }]
  },
  'clock-text': {
    'color': 'white',
    'fontSize': [{ 'unit': 'rem', 'value': 2.25 }]
  }
});
