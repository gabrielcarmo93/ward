import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

// import { Container } from './styles';

export default class Map extends Component {
  state = {
    region: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const coord = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        }
  
        this.setState({ region: coord })
      },
      () => {},
      {
        timeout: 2000,
        enableAccuracy: true,
        maximumAge: 1000
      }
    )
  }

  render() {
    const { region } = this.state
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        region={region}
      />
    )
  }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
})