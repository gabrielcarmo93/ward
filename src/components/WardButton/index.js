import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


// import { Container } from './styles';

export default function WardButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name='pluscircle' style={styles.icon}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 32
  },
  icon: {
    color: '#1B1E23',
    fontSize: 48,
  }
})