import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight};
  background-color: #1B1E23;
  justify-content: center;
  align-items: center;
`

const WelcomeTitle = styled.Text`
  color: #eee;
  font-size: 24;
`

const WardButton = styled.TouchableOpacity`

`

export { Container, WelcomeTitle, WardButton }