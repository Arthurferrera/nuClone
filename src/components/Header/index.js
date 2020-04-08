import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Container, Top} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Image source={logo} />
        <Text style={styles.title}>Arthur</Text>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '900',
    marginLeft: 8,
  },
});
